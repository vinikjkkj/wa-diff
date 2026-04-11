__d(
  "WAWebMultiVcardModal.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebVcardModalDetails.react",
    "WAWebVcardParsingUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.onSaveContact,
        a = e.usernames,
        i = e.vcards,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { surface: "unknown", viewName: "multi-contact-viewer" }),
          (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] !== i.length
        ? ((c = s._(/*BTDS*/ '_j{"*":"{count} contacts","_1":"1 contact"}', [
            s._plural(i.length, "count"),
          ])),
          (t[1] = i.length),
          (t[2] = c))
        : (c = t[2]);
      var m;
      t[3] !== c
        ? ((m = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: c,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            onCancel: d,
          })),
          (t[3] = c),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "x889kno" }), (t[5] = p))
        : (p = t[5]);
      var _;
      if (t[6] !== n || t[7] !== a || t[8] !== i) {
        var f;
        (t[10] !== n || t[11] !== a
          ? ((f = function (t, i) {
              if (!t) return null;
              var e = o("WAWebVcardParsingUtils").vcardLidWid(t),
                l = e && a ? a.get(e.toString()) : null;
              return u.jsx(
                "div",
                {
                  className: "x1n2onr6 xyorhqc x1280gxy x1bnvlk4",
                  children: u.jsx(r("WAWebVcardModalDetails.react"), {
                    parsedVcard: t,
                    thumbnail: o("WAWebVcardParsingUtils").vcardThumbnail(t),
                    onSaveContact: n,
                    username: l,
                  }),
                },
                i,
              );
            }),
            (t[10] = n),
            (t[11] = a),
            (t[12] = f))
          : (f = t[12]),
          (_ = i.map(f)),
          (t[6] = n),
          (t[7] = a),
          (t[8] = i),
          (t[9] = _));
      } else _ = t[9];
      var g;
      t[13] !== _
        ? ((g = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, p, { children: _ }),
              ),
            }),
          })),
          (t[13] = _),
          (t[14] = g))
        : (g = t[14]);
      var h;
      return (
        t[15] !== m || t[16] !== g
          ? ((h = u.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Box,
              children: u.jsxs(r("WAWebDrawer.react"), {
                tsNavigationData: l,
                children: [m, g],
              }),
            })),
            (t[15] = m),
            (t[16] = g),
            (t[17] = h))
          : (h = t[17]),
        h
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
