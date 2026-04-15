__d(
  "WAWebSchemaVersionOverrideButterbar.react",
  ["fbt", "WDSBanner.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onDismissNotice,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "x1380le5 xefnzgg x1uvdrpn x14mko6t" }),
          (t[0] = a))
        : (a = t[0]);
      var i, l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "[DEV ONLY] Database Version Override")),
          (l = s._(
            /*BTDS*/ "You are overriding the database schema version. Make sure to test a new client without the override. More info: https:\/\/fburl.com\/wa_wc_db_rollout",
          )),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2]));
      var c;
      return (
        t[3] !== n
          ? ((c = u.jsx(
              "div",
              babelHelpers.extends({}, a, {
                children: u.jsx(r("WDSBanner.react"), {
                  type: "warning",
                  title: i,
                  body: l,
                  onDismiss: n,
                }),
              }),
            )),
            (t[3] = n),
            (t[4] = c))
          : (c = t[4]),
        c
      );
    }
    l.default = c;
  },
  226,
);
