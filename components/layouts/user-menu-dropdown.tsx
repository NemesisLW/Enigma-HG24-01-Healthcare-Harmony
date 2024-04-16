import { Suspense } from "react";
import Link from "next/link";
import { auth, signOut } from "auth";
import {
  CircleUserRound,
  LayoutDashboard,
  LogOut,
  StarIcon,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AvatarSkeleton from "../skeletons/avatar-skeleton";
import UserAvatar from "./user-avatar";
import { DropDownSignOutItem } from "../auth/sign-out-dropdown-item";

async function UserMenu() {
  const session = await auth();

  if (!session)
    return (
      <Button variant="secondary" size="sm" asChild>
        <Link href="/login">Login</Link>
      </Button>
    );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Suspense fallback={<AvatarSkeleton />}>
          <UserAvatar
            name={session?.user?.name!}
            image={session?.user?.image}
          />
        </Suspense>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel className="text-center">
          {session?.user?.name || "Arghya"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuLabel className="flex animate-pulse items-center justify-center space-x-1 text-xs text-[#2563EB]">
          <StarIcon fill="#2563EB" />
          <p>Premium</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <CircleUserRound className="mr-2 h-4 w-4" aria-hidden="true" />
          Profile
          <DropdownMenuShortcut>⇧⌘K</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard">
            <LayoutDashboard className="mr-2 h-4 w-4" aria-hidden="true" />
            Dashboard
            <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Wallet className="mr-2 h-4 w-4" aria-hidden="true" />
          Billing
          <DropdownMenuShortcut>⇧⌘F</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropDownSignOutItem
          signOut={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
          Sign Out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropDownSignOutItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
