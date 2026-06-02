__d(
  "WAWebStorageGatingUtils",
  ["WALogger", "WAWebModelStorageUtils", "WAWebUserPrefsDBSettings", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = await o("WAWebModelStorageUtils").storageExists();
      if (n) {
        var a = await o(
          "WAWebUserPrefsDBSettings",
        ).getColumnPackingValueFromStorage();
        return a == null
          ? (await o("WAWebUserPrefsDBSettings").setColumnPackingValueToStorage(
              !1,
            ),
            !1)
          : a;
      }
      if (!r("gkx")("26258") && URLSearchParams) {
        var i = new URLSearchParams(window.location.search),
          l = i.get("pack");
        if (l != null)
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[column-serialization] enabled from url request",
                ])),
            ),
            await o("WAWebUserPrefsDBSettings").setColumnPackingValueToStorage(
              l === "true" || l === "1",
            ),
            !0
          );
      }
      return (
        await o("WAWebUserPrefsDBSettings").setColumnPackingValueToStorage(t),
        t
      );
    }
    l.columnPackingEnabled = s;
  },
  98,
);
