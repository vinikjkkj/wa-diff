__d(
  "WAWebNewsletterAdminInvitePrivacyNux.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterModalsUtils.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m() {
      (o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getNewsletterAdminInviteFaqUrlV2(),
      ),
        o("WAWebModalManager").ModalManager.close());
    }
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.viewNux;
      return (
        d(
          function () {
            i();
          },
          [i],
        ),
        c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          ref: n,
          title: _.modalTitle(),
          onOK: a.onOk,
          okText: _.invite(),
          onCancel: m,
          cancelText: r("WAWebFbtCommon")("Learn more"),
          children: c.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            children: c.jsx(
              o("WAWebNewsletterModalsUtils.react").BulletPointList,
              { bullets: f },
            ),
          }),
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = {
        modalTitle: function () {
          return s._(/*BTDS*/ "Invite admins");
        },
        invite: function () {
          return s._(/*BTDS*/ "Invite");
        },
      },
      f = [].concat(o("WAWebNewsletterModalsUtils.react").MinimalBullets, [
        o("WAWebNewsletterModalsUtils.react").VisibilityBullet,
      ]);
    l.default = p;
  },
  226,
);
