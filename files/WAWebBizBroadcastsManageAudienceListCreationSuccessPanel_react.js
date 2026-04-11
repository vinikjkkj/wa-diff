__d(
  "WAWebBizBroadcastsManageAudienceListCreationSuccessPanel.react",
  ["fbt", "WDSText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.broadcastListName,
        a = e.broadcastListRecipientCount,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "x78zum5 xdt5ytf x1f0uite xs2akgl xl7twdi" }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(r("WDSText.react"), {
            type: "Headline1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Your new broadcast audience is ready"),
          })),
          (t[1] = l))
        : (l = t[1]);
      var c, d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "Open your phone to create and send a business broadcast to your new audience.",
            ),
          })),
          (d = {
            className:
              "x1ucmu8n xyi3aci xwf5gio x1p453bz x1suzm8a xscbp6u xb0esv5 xyo0t3i x1xrf6ya",
          }),
          (t[2] = c),
          (t[3] = d))
        : ((c = t[2]), (d = t[3]));
      var m;
      t[4] !== n
        ? ((m = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: n,
          })),
          (t[4] = n),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== a
        ? ((p = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            children: s._(
              /*BTDS*/ '_j{"*":"{number_of_recipients} recipients","_1":"1 recipient"}',
              [s._plural(a, "number_of_recipients")],
            ),
          })),
          (t[6] = a),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== m || t[9] !== p
          ? ((_ = u.jsxs(
              "div",
              babelHelpers.extends({}, i, {
                children: [
                  l,
                  c,
                  u.jsxs(
                    "div",
                    babelHelpers.extends({}, d, { children: [m, p] }),
                  ),
                ],
              }),
            )),
            (t[8] = m),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = c;
  },
  226,
);
