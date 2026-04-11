__d(
  "WAWebStatusPostingDropdown.react",
  [
    "fbt",
    "WAWebCreateTextStatusFlow.react",
    "WAWebModalManager",
    "WAWebStatusAttachMediaFlow.react",
    "WAWebStatusGatingUtils",
    "WDSIconIcAddPhotoAlternate.react",
    "WDSIconIcEdit.react",
    "WDSIconIcFilter.react",
    "WDSIconIcLock.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.isNewsletterStatus,
        a = e.newsletterWid,
        i = n === void 0 ? !1 : n,
        l;
      t[0] !== i || t[1] !== a
        ? ((l = function () {
            o("WAWebModalManager").ModalManager.openMedia(
              u.jsx(r("WAWebStatusAttachMediaFlow.react"), {
                newsletterWid: a,
                isNewsletterStatus: i,
              }),
              { transition: "status-modal" },
            );
          }),
          (t[0] = i),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        d;
      t[3] !== i || t[4] !== a
        ? ((d = function () {
            o("WAWebModalManager").ModalManager.openMedia(
              u.jsx(r("WAWebCreateTextStatusFlow.react"), {
                isNewsletterStatus: i,
                newsletterWid: a,
              }),
              { transition: "status-modal" },
            );
          }),
          (t[3] = i),
          (t[4] = a),
          (t[5] = d))
        : (d = t[5]);
      var m = d,
        p;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Photos & videos")), (t[6] = p))
        : (p = t[6]);
      var _;
      t[7] !== c
        ? ((_ = u.jsx(r("WDSMenuItem.react"), {
            testid: void 0,
            Icon: o(
              "WAWebStatusGatingUtils",
            ).isUpdatesTabInNavigationBarEnabled()
              ? r("WDSIconIcAddPhotoAlternate.react")
              : r("WDSIconIcFilter.react"),
            title: p,
            onPress: c,
          })),
          (t[7] = c),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Text")), (t[9] = f))
        : (f = t[9]);
      var g;
      t[10] !== m
        ? ((g = u.jsx(r("WDSMenuItem.react"), {
            testid: void 0,
            Icon: r("WDSIconIcEdit.react"),
            title: f,
            onPress: m,
          })),
          (t[10] = m),
          (t[11] = g))
        : (g = t[11]);
      var h;
      return (
        t[12] !== _ || t[13] !== g
          ? ((h = u.jsxs(r("WDSMenu.react"), { children: [_, g] })),
            (t[12] = _),
            (t[13] = g),
            (t[14] = h))
          : (h = t[14]),
        h
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onOpenStatusPrivacySettingDrawer,
        a;
      t[0] !== n
        ? ((a = function () {
            n == null || n();
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Status Privacy")), (t[2] = l))
        : (l = t[2]);
      var c;
      return (
        t[3] !== i
          ? ((c = u.jsx(r("WDSMenu.react"), {
              children: u.jsx(r("WDSMenuItem.react"), {
                Icon: r("WDSIconIcLock.react"),
                title: l,
                onPress: i,
              }),
            })),
            (t[3] = i),
            (t[4] = c))
          : (c = t[4]),
        c
      );
    }
    ((l.AddStatusMenu = c), (l.StatusPrivacyMenu = d));
  },
  226,
);
