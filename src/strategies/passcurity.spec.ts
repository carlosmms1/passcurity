class PasscurityStrategy {
  public check(password: string) {
    if (password.length < 8)
      throw new Error("Password must have min length of 8.");
    return true;
  }
}

describe("passcurity strategy", () => {
  describe("check the password security", () => {
    it("should ensure that password have min length of 8", () => {
      const passcurity = new PasscurityStrategy();
      const password = "1234";
      expect(() => passcurity.check(password)).toThrowError(
        "Password must have min length of 8."
      );
    });
  });
});
