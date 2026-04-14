__d(
  "WAWebCommunityDeactivationPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDeactivateCommunityAction",
    "WAWebModalManager",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = o("useWAWebModelValues").useModelValues(t, [
          "id",
          "formattedTitle",
        ]),
        a = s._(/*BTDS*/ "Deactivate {community-name}", [
          s._param("community-name", n.formattedTitle),
        ]),
        i = s._(
          /*BTDS*/ 'Are you sure you want to deactivate the community "{community-name}"? This action cannot be undone.',
          [s._param("community-name", n.formattedTitle)],
        ),
        l = function () {
          (r("WAWebDeactivateCommunityAction")(n),
            o("WAWebModalManager").ModalManager.close());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: a,
        onOK: l,
        onCancel: o("WAWebModalManager").closeModalManager,
        okButtonType: "solid-warning",
        okText: s._(/*BTDS*/ "Deactivate"),
        children: i,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
