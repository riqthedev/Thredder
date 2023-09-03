import ThreadCard from "@/components/cards/ThreadCard"
import { fetchThreadById } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Comment from "@/components/forms/Comment";


const Page = async ({ params }: { params: { id: string } }) => {

    const user = await currentUser()
    if (!params.id) return null;

    const userInfo = await fetchUser(user.id)
    if (!userInfo?.onbaord) redirect('/onboarding')

    const thread = await fetchThreadById(params.id)

        return (


            <section className="relative">
                <div>
                    <ThreadCard
                        key={thread._id}
                        id={thread._id}
                        currentUserId={user?.id || ""}
                        parentId={thread.parentId}
                        content={thread.text}
                        community={thread.community}
                        createdAt={thread.createdAt}
                        comments={thread.children}
                    />
                </div>
                <div className="mt-7">
                    <Comment/>
                </div>
            </section>
        )
}
        

export default Page