__d(
  "WAWebDebugLocalStorage",
  [
    "WAMd5",
    "WANullthrows",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = { keyWithoutHash: e, keyInLocalStorage: e, value: null },
        n = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(e);
      if (n != null) return ((t.value = n), t);
      var a = r("WANullthrows")(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        ).toString(),
        i = o("WAMd5").md5(a + ":" + e);
      return (
        (n = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(i)),
        n != null && ((t.keyInLocalStorage = i), (t.value = n)),
        t
      );
    }
    function s() {
      var t = babelHelpers.extends(
          {},
          o("WAWebUserPrefsKeys").KEYS,
          o("WAWebUserPrefsKeys").MD_KEYS,
          o("WAWebUserPrefsKeys").COLLECTIONS_KEYS,
        ),
        n = Object.values(t)
          .map(function (t) {
            if (typeof t != "string")
              throw r("err")("Keys in localStorage can only be strings");
            return e(t);
          })
          .filter(function (e) {
            return e.value != null;
          });
      return n;
    }
    s.doc =
      "Retrieve all of the key value pairs in localStorage with their keys before hashing and the key that is currently stored.";
    function u(t) {
      var n = e(t);
      return n.value == null ? null : n;
    }
    u.doc =
      "Retrieve an item from localStorage and get the current stored key if it was hashed.";
    function c(e, t) {
      r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(e, t);
    }
    c.doc = "Set an item in localStorage.";
    function d(e) {
      r("WAWebLocalStorage") && r("WAWebLocalStorage").removeItem(e);
    }
    d.doc = "Remove an item entry from localStorage";
    var m = {
      retrieveAllLocalStorageItems: s,
      retrieveLocalStorageItem: u,
      setLocalStorageItem: c,
      removeLocalStorageItem: d,
    };
    l.default = m;
  },
  98,
);
