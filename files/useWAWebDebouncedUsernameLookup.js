__d(
  "useWAWebDebouncedUsernameLookup",
  [
    "WALogger",
    "WAWebContactlessChatUtils",
    "WAWebQueryExistsJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebUsernameValidationUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebDebouncedCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useRef;
    function d(e) {
      var t = e.startsWith("@"),
        n = t ? e.slice(1) : e,
        r = null;
      if (t) {
        var a = n.split(":"),
          i = a[0],
          l = a[1];
        ((n = i),
          l != null &&
            o("WAWebUsernameTypes").isUsernameKey(l) &&
            (r = o("WAWebUsernameTypes").asUsernameKey(l)));
      }
      return o("WAWebUsernameValidationUtils").validateUsernameLocally(n)
        .isValid
        ? { username: n, usernameKey: r }
        : null;
    }
    function m(t) {
      var a = t.requestOrigin,
        i = t.searchUsername,
        l = t.setLoading,
        u = t.setUnknownContactInfo,
        m = t.text,
        p = c(null);
      r("useWAWebDebouncedCallback")(
        function () {
          if (
            !(
              !i ||
              !o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled()
            ) &&
            p.current !== m
          ) {
            p.current = m;
            var t = d(m);
            if (t == null) {
              u(null);
              return;
            }
            var r = t.username,
              c = t.usernameKey;
            if (r == null) {
              u(null);
              return;
            }
            (l(!0),
              o("WAWebQueryExistsJob")
                .queryUsernameExists(r, c, a)
                .then(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var n, a;
                        if (p.current === m) {
                          var i = t == null ? void 0 : t.isUsernameSearch;
                          if ((t == null ? void 0 : t.keyRequired) === !0) {
                            (o("WALogger").LOG(
                              e ||
                                (e = babelHelpers.taggedTemplateLiteralLoose([
                                  "useDebouncedUsernameLookup: username query returned keyRequired",
                                ])),
                            ),
                              u({
                                username: r,
                                searchQuery: m,
                                triedKey: c != null,
                                isUsernameSearch: i,
                              }));
                            return;
                          }
                          if ((t == null ? void 0 : t.wid) == null) {
                            u(null);
                            return;
                          }
                          var l = yield o(
                            "WAWebContactlessChatUtils",
                          ).getChatByWid(t.wid, !!t.biz);
                          u({
                            wid: t.wid,
                            chat: l,
                            username: r,
                            isBusiness: t.biz,
                            verifiedLevel:
                              (n = t.bizInfo) == null
                                ? void 0
                                : n.verifiedName.level,
                            verifiedName:
                              (a = t.bizInfo) == null
                                ? void 0
                                : a.verifiedName.name,
                            searchQuery: m,
                            isUsernameSearch: i,
                          });
                        }
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                )
                .catch(function (e) {
                  (o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "useDebouncedUsernameLookup: queryUsernameExists failed with error:",
                        "",
                      ])),
                    e,
                  ),
                    u(null));
                })
                .finally(function () {
                  l(!1);
                }));
          }
        },
        o("WAWebUsernameGatingUtils").usernameEligibilityDebounceMs(),
        { leading: !0 },
      )();
    }
    l.useDebouncedUsernameLookup = m;
  },
  98,
);
