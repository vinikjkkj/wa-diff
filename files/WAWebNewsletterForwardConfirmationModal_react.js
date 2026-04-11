__d(
  "WAWebNewsletterForwardConfirmationModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p() {
      o("WAWebModalManager").ModalManager.close();
    }
    function _(e) {
      var t = e.forwardToChat,
        n = e.handleConfirm,
        a = m(!1),
        i = a[0],
        l = a[1],
        s = d(
          function () {
            (l(!0),
              n().finally(function () {
                l(!1);
              }));
          },
          [n],
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-forward-confirmation",
        },
        okSpinner: i,
        okDisabled: i,
        cancelDisabled: i,
        onOK: s,
        okText: f.okText(),
        title: f.title(t.name),
        onCancel: p,
        cancelText: r("WAWebFbtCommon")("Cancel"),
        children: f.body(),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = {
      title: function (t) {
        return s._(/*BTDS*/ "Forward to the channel '{channel-name}'?", [
          s._param("channel-name", t),
        ]);
      },
      body: function () {
        return s._(
          /*BTDS*/ "This will be visible to the channel's followers and anyone else who views the channel.",
        );
      },
      okText: function () {
        return s._(/*BTDS*/ "Forward to channel");
      },
    };
    l.default = _;
  },
  226,
);
