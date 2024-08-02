export class PasscurityStrategy {
  public check(password: string) {
    if (password.length < 8)
      throw new Error("Password must have min length of 8.");
    return true;
  }
}
