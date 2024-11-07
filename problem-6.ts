{
  //

  // interface Profile {
  //   name?: string;
  //   age?: number;
  //   email?: string;
  // }

  // interface Partial extends Profile {}

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  const updateProfile = (profile: Profile, partial: Partial<Profile>): Profile => {
    // profile.age = partial.age;
    // return profile;

    return {...profile, ...partial}
  };

  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
