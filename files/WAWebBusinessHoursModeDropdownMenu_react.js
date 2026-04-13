__d(
  "WAWebBusinessHoursModeDropdownMenu.react",
  [
    "fbt",
    "WAWebDropdownItem.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(19),
        n;
      t[0] !== e
        ? ((n = function () {
            return (e.onModeChange("specific_hours"), !0);
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var a;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Specific hours"),
          })),
          (t[2] = a))
        : (a = t[2]);
      var i;
      t[3] !== n
        ? ((i = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
            action: n,
            children: a,
          })),
          (t[3] = n),
          (t[4] = i))
        : (i = t[4]);
      var l;
      t[5] !== e
        ? ((l = function () {
            return (e.onModeChange("open_24h"), !0);
          }),
          (t[5] = e),
          (t[6] = l))
        : (l = t[6]);
      var c;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Open 24 hours"),
          })),
          (t[7] = c))
        : (c = t[7]);
      var d;
      t[8] !== l
        ? ((d = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
            action: l,
            children: c,
          })),
          (t[8] = l),
          (t[9] = d))
        : (d = t[9]);
      var m;
      t[10] !== e
        ? ((m = function () {
            return (e.onModeChange("appointment_only"), !0);
          }),
          (t[10] = e),
          (t[11] = m))
        : (m = t[11]);
      var p;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "By appointment only"),
          })),
          (t[12] = p))
        : (p = t[12]);
      var _;
      t[13] !== m
        ? ((_ = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
            action: m,
            children: p,
          })),
          (t[13] = m),
          (t[14] = _))
        : (_ = t[14]);
      var f;
      return (
        t[15] !== i || t[16] !== d || t[17] !== _
          ? ((f = u.jsxs(u.Fragment, { children: [i, d, _] })),
            (t[15] = i),
            (t[16] = d),
            (t[17] = _),
            (t[18] = f))
          : (f = t[18]),
        f
      );
    }
    l.default = c;
  },
  226,
);
