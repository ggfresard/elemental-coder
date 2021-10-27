import type { NextPage } from "next"
import { signIn, useSession } from "next-auth/react"

const Home: NextPage = () => {
  const { data: session, status } = useSession()

  const user = session?.user

  return (
    <div>
      <div className="p-5  bg-green-900 h-36 flex items-stretch justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="text-4xl">Elemental Coder</div>
        </div>
        <div className="flex items-center gap-2">
          {session ? (
            <>
              {user?.name}
              <div className="h-20 rounded-full">
                <img
                  className="h-full rounded-full ring-2 ring-green-300"
                  src={user?.image as string}
                  alt={user?.name as string}
                />
              </div>
            </>
          ) : (
            <>
              <button
                className="px-5 py-2 bg-green-600"
                onClick={() => signIn()}
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
