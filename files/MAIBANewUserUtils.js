__d(
  "MAIBANewUserUtils",
  [
    "CurrentUser",
    "MAIBAConstants",
    "MAIBANewUserUtilsMutation.graphql",
    "MAIBANewUserUtilsWelcomePageImpressionCountQuery.graphql",
    "RelayHooks",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ =
        e !== void 0
          ? e
          : (e = n("MAIBANewUserUtilsWelcomePageImpressionCountQuery.graphql")),
      f = s !== void 0 ? s : (s = n("MAIBANewUserUtilsMutation.graphql"));
    function g() {
      var e = r("CurrentUser").getID(),
        t = o("RelayHooks").useRelayEnvironment(),
        n = h();
      return d(
        function () {
          o("RelayHooks")
            .fetchQuery(
              t,
              _,
              { user_id: e !== "0" ? e : null },
              { fetchPolicy: "store-or-network" },
            )
            .subscribe({
              next: function (t) {
                var e,
                  r =
                    (e =
                      t == null
                        ? void 0
                        : t.maiba_welcome_page_impression_count) != null
                      ? e
                      : 0;
                r <
                  o("MAIBAConstants")
                    .MAIBA_NEW_USER_WELCOME_PAGE_IMPRESSION_THRESHOLD && n();
              },
            });
        },
        [e, t, n],
      );
    }
    function h() {
      var e = r("CurrentUser").getID(),
        t = o("RelayHooks").useMutation(f),
        n = t[0];
      return function () {
        n({ variables: { user_id: e !== "0" ? e : null } });
      };
    }
    function y() {
      var e = g(),
        t = p(!1);
      m(
        function () {
          t.current || (e(), (t.current = !0));
        },
        [e],
      );
    }
    l.useUpdateMAIBAWelcomePageImpression = y;
  },
  98,
);
