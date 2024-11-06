{
  //

  interface Profile {
    name?: string;
    age?: number;
    email?: string;
  }

  interface Partial extends Profile {}

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  const updateProfile = (profile: Profile, partial: Partial) => {
    profile.age = partial.age;

    return profile;
  };

  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
