__d(
  "WAWebCommunityDeactivationPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDeactivateCommunityAction",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["id", "formattedTitle"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(n, a),
        l;
      t[1] !== i.formattedTitle
        ? ((l = s._(/*BTDS*/ "Deactivate {community-name}", [
            s._param("community-name", i.formattedTitle),
          ])),
          (t[1] = i.formattedTitle),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        d;
      t[3] !== i.formattedTitle
        ? ((d = s._(
            /*BTDS*/ 'Are you sure you want to deactivate the community "{community-name}"? This action cannot be undone.',
            [s._param("community-name", i.formattedTitle)],
          )),
          (t[3] = i.formattedTitle),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        p;
      t[5] !== i
        ? ((p = function () {
            (r("WAWebDeactivateCommunityAction")(i),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[5] = i),
          (t[6] = p))
        : (p = t[6]);
      var _ = p,
        f;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Deactivate")), (t[7] = f))
        : (f = t[7]);
      var g;
      return (
        t[8] !== m || t[9] !== _ || t[10] !== c
          ? ((g = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: c,
              onOK: _,
              onCancel: o("WAWebModalManager").closeModalManager,
              okButtonType: "solid-warning",
              okText: f,
              children: m,
            })),
            (t[8] = m),
            (t[9] = _),
            (t[10] = c),
            (t[11] = g))
          : (g = t[11]),
        g
      );
    }
    l.default = c;
  },
  226,
);
