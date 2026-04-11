__d(
  "react-relay/relay-hooks/useMutation",
  [
    "react",
    "react-compiler-runtime",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-compiler-runtime").c,
      s = e || (e = n("react")),
      u = n("relay-runtime").commitMutation,
      c = s.useState,
      d = s.useEffect,
      m = s.useRef,
      p = s.useCallback;
    function _(e, t) {
      var r = l(36),
        o = t === void 0 ? u : t,
        a = n("react-relay/relay-hooks/useRelayEnvironment")(),
        i = m(a),
        s = m(e),
        _;
      r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = new Set()), (r[0] = _))
        : (_ = r[0]);
      var f = m(_),
        g = c(!1),
        h = g[0],
        y = g[1],
        C;
      r[1] !== a ||
      r[2] !== i ||
      r[3] !== f ||
      r[4] !== e ||
      r[5] !== s ||
      r[6] !== y
        ? ((C = function (n) {
            i.current === a &&
              s.current === e &&
              (f.current.delete(n), y(f.current.size > 0));
          }),
          (r[1] = a),
          (r[2] = i),
          (r[3] = f),
          (r[4] = e),
          (r[5] = s),
          (r[6] = y),
          (r[7] = C))
        : (C = r[7]);
      var b;
      r[8] !== a || r[9] !== e
        ? ((b = [a, e]), (r[8] = a), (r[9] = e), (r[10] = b))
        : (b = r[10]);
      var v = p(C, b),
        S;
      r[11] !== a ||
      r[12] !== i ||
      r[13] !== f ||
      r[14] !== e ||
      r[15] !== s ||
      r[16] !== y
        ? ((S = function () {
            (i.current !== a || s.current !== e) &&
              ((f.current = new Set()),
              y(!1),
              (i.current = a),
              (s.current = e));
          }),
          (r[11] = a),
          (r[12] = i),
          (r[13] = f),
          (r[14] = e),
          (r[15] = s),
          (r[16] = y),
          (r[17] = S))
        : (S = r[17]);
      var R;
      (r[18] !== a || r[19] !== e
        ? ((R = [a, e]), (r[18] = a), (r[19] = e), (r[20] = R))
        : (R = r[20]),
        d(S, R));
      var L;
      r[21] !== v ||
      r[22] !== o ||
      r[23] !== a ||
      r[24] !== f ||
      r[25] !== e ||
      r[26] !== y
        ? ((L = function (n) {
            y(!0);
            var t = o(
              a,
              babelHelpers.extends({}, n, {
                mutation: e,
                onCompleted: function (r, o) {
                  (v(t), n.onCompleted == null || n.onCompleted(r, o));
                },
                onError: function (r) {
                  (v(t), n.onError == null || n.onError(r));
                },
                onUnsubscribe: function () {
                  (v(t), n.onUnsubscribe == null || n.onUnsubscribe());
                },
                onNext: function () {
                  n.onNext == null || n.onNext();
                },
              }),
            );
            return (f.current.add(t), t);
          }),
          (r[21] = v),
          (r[22] = o),
          (r[23] = a),
          (r[24] = f),
          (r[25] = e),
          (r[26] = y),
          (r[27] = L))
        : (L = r[27]);
      var E;
      r[28] !== v || r[29] !== o || r[30] !== a || r[31] !== e
        ? ((E = [v, o, a, e]),
          (r[28] = v),
          (r[29] = o),
          (r[30] = a),
          (r[31] = e),
          (r[32] = E))
        : (E = r[32]);
      var k = p(L, E),
        I;
      return (
        r[33] !== k || r[34] !== h
          ? ((I = [k, h]), (r[33] = k), (r[34] = h), (r[35] = I))
          : (I = r[35]),
        I
      );
    }
    a.exports = _;
  },
  null,
);
