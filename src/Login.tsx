import { Link } from "react-router-dom";
import { getAuthorizationUrl, useAuthguard } from "@authguard/react";

const Login = () => {
  const { user, logout } = useAuthguard();

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col gap-y-2 w-96 bg-white rounded-lg shadow-md p-8">
        <img
          className="w-40 object-contain m-auto mb-4"
          src="/logo.png"
          alt="logo"
        />
        {user ? (
          <div className="flex flex-col gap-y-2 my-5 p-5 border border-gray-100 shadow-md">
            <div className="flex items-center gap-x-2">
              <span className="font-medium">Username: </span>
              <span>{user.user}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <h4 className="font-medium">Authorities: </h4>
              <div className="grid grid-cols-1 gap-1">
                {user.authorities.map((authority, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-gray-200 font-medium w-max"
                  >
                    {authority}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <h4 className="font-medium">Scopes: </h4>
              <div className="grid grid-cols-1 gap-1">
                {user.scope.map((scope, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-gray-200 font-medium w-max"
                  >
                    {scope}
                  </span>
                ))}
              </div>
            </div>
            <button
              className="px-4 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 duration-150 mt-10 text-center"
              onClick={logout}
            >
              Log out
            </button>
          </div>
        ) : (
          <>
            <p className="font-medium italic text-gray-500 text-center text-sm">
              This is a sample react application for authguard. Made only for
              demo purposes.
            </p>
            <Link
              className="px-4 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 duration-150 mt-10 text-center"
              to={getAuthorizationUrl()}
            >
              Log in with Authguard
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
