const reactAppRewired = require(".");
describe("react-app-rewired", () => {
  describe("exports", () => {
    it("should export getLoader", () => {
      const { getLoader } = reactAppRewired;
      expect(getLoader).toBeDefined();
    });

    it("should export loaderNameMatches", () => {
      const { loaderNameMatches } = reactAppRewired;
      expect(loaderNameMatches).toBeDefined();
    });

    it("should export loaderNameMatches", () => {
      const { loaderNameMatches } = reactAppRewired;
      expect(loaderNameMatches).toBeDefined();
    });

    it("should export getBabelLoader", () => {
      const { getBabelLoader } = reactAppRewired;
      expect(getBabelLoader).toBeDefined();
    });

    it("should export injectBabelPlugin", () => {
      const { injectBabelPlugin } = reactAppRewired;
      expect(injectBabelPlugin).toBeDefined();
    });

    it("should export compose", () => {
      const { compose } = reactAppRewired;
      expect(compose).toBeDefined();
    });
  });
});
