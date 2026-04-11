__d(
  "SecuredActionTriggerWithAccountID.react",
  [
    "CometRouteURL",
    "react",
    "react-compiler-runtime",
    "useCometEntryPointDialog",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.accountID,
        a = e.accountType,
        i = e.categoryName,
        l = e.context,
        s = e.entrypoint,
        d = e.onCancel,
        m = e.onExit,
        p = e.onFailure,
        _ = e.onSuccess,
        f = e.reauthContentType,
        g = e.sensitiveAction,
        h = o("CometRouteURL").useRouteURL(),
        y;
      t[0] !== n ||
      t[1] !== a ||
      t[2] !== i ||
      t[3] !== l ||
      t[4] !== f ||
      t[5] !== h ||
      t[6] !== g
        ? ((y = {
            account_id: n,
            account_type: a,
            category_name: i,
            context: l,
            reauth_content_type: f,
            return_uri: h,
            sensitive_action: g,
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = f),
          (t[5] = h),
          (t[6] = g),
          (t[7] = y))
        : (y = t[7]);
      var C = r("useCometEntryPointDialog")(s, y),
        b = C[0],
        v = c(!0),
        S,
        R;
      return (
        t[8] !== n ||
        t[9] !== a ||
        t[10] !== i ||
        t[11] !== d ||
        t[12] !== m ||
        t[13] !== p ||
        t[14] !== _ ||
        t[15] !== f ||
        t[16] !== g ||
        t[17] !== b
          ? ((S = function () {
              (v.current &&
                b({
                  accountID: n,
                  accountType: a,
                  categoryName: i,
                  onCancel: d,
                  onExit: m,
                  onFailure: p,
                  onSuccess: _,
                  reauthContentType: f,
                  sensitiveAction: g,
                }),
                (v.current = !1));
            }),
            (R = [b, n, a, i, m, _, d, p, f, g]),
            (t[8] = n),
            (t[9] = a),
            (t[10] = i),
            (t[11] = d),
            (t[12] = m),
            (t[13] = p),
            (t[14] = _),
            (t[15] = f),
            (t[16] = g),
            (t[17] = b),
            (t[18] = S),
            (t[19] = R))
          : ((S = t[18]), (R = t[19])),
        u(S, R),
        null
      );
    }
    l.default = d;
  },
  98,
);
