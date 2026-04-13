__d(
  "WAWebPhoneNumberPrivacyNux.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebPnhSelfDisplayName.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.cancelText,
        a = e.customContent,
        i = e.displayName,
        l = e.okButtonType,
        u = e.okText,
        c = e.onCancel,
        d = e.onOK,
        m = e.pictureWid,
        p = e.subTitle,
        _ = e.testid,
        f = e.title,
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { surface: "unknown", viewName: "phone-number-privacy-nux" }),
          (t[0] = g))
        : (g = t[0]);
      var h;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            className:
              "x1anpbxc x1wcu8vx xyorhqc x1ult018 x9f619 x78zum5 xdt5ytf xl56j7k x6s0dn4",
          }),
          (t[1] = h))
        : (h = t[1]);
      var y;
      t[2] !== i || t[3] !== m
        ? ((y =
            !r("isStringNullOrEmpty")(i) &&
            s.jsx(r("WAWebPnhSelfDisplayName.react"), {
              displayName: i,
              pictureWid: m,
            })),
          (t[2] = i),
          (t[3] = m),
          (t[4] = y))
        : (y = t[4]);
      var C;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = {
            className:
              "xh8yej3 x1aueamr x98l61r x14z9mp x1ua1l7f x1lziwak x1hkbg2g x1s688f x14ug900 x2b8uid",
          }),
          (t[5] = C))
        : (C = t[5]);
      var b;
      t[6] !== f
        ? ((b = s.jsx("div", babelHelpers.extends({}, C, { children: f }))),
          (t[6] = f),
          (t[7] = b))
        : (b = t[7]);
      var v;
      t[8] !== p
        ? ((v =
            p != null &&
            s.jsx("div", {
              className: "x1jchvi3 xefnzgg xo1l8bm x1xet1wb xhslqc4 x2b8uid",
              children: p,
            })),
          (t[8] = p),
          (t[9] = v))
        : (v = t[9]);
      var S;
      t[10] !== a || t[11] !== y || t[12] !== b || t[13] !== v
        ? ((S = s.jsxs(
            "div",
            babelHelpers.extends({}, h, { children: [y, b, v, a] }),
          )),
          (t[10] = a),
          (t[11] = y),
          (t[12] = b),
          (t[13] = v),
          (t[14] = S))
        : (S = t[14]);
      var R;
      return (
        t[15] !== n ||
        t[16] !== l ||
        t[17] !== u ||
        t[18] !== c ||
        t[19] !== d ||
        t[20] !== S ||
        t[21] !== _
          ? ((R = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: g,
              onOK: d,
              okText: u,
              onCancel: c,
              cancelText: n,
              okButtonType: l,
              testid: void 0,
              children: S,
            })),
            (t[15] = n),
            (t[16] = l),
            (t[17] = u),
            (t[18] = c),
            (t[19] = d),
            (t[20] = S),
            (t[21] = _),
            (t[22] = R))
          : (R = t[22]),
        R
      );
    }
    l.default = u;
  },
  98,
);
