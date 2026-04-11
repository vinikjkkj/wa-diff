__d(
  "WAWebQuarantinedAttachmentInterstitial.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDefenseModeQuarantineLogger",
    "WAWebDefenseModeUtils",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebQuarantineDataStore",
    "WAWebUnquarantineMessageJob",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.msgKey,
        a = e.quarantineData,
        i = c(!1),
        l = i[0],
        d = i[1],
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o(
              "WAWebDefenseModeQuarantineLogger",
            ).logQuarantineRestoreConfirm(),
              d(!0));
            try {
              (yield o("WAWebUnquarantineMessageJob").unquarantineMessageJob(
                t,
                a,
              ),
                o(
                  "WAWebDefenseModeQuarantineLogger",
                ).logQuarantineRestoreSuccess(),
                o("WAWebModalManager").ModalManager.close());
            } catch (e) {
              (o(
                "WAWebDefenseModeQuarantineLogger",
              ).logQuarantineRestoreFailed(),
                o("WAWebModalManager").ModalManager.close(),
                p());
            } finally {
              d(!1);
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        _ = function () {
          (o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreDismiss(),
            o("WAWebModalManager").ModalManager.close());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        title: r("WAWebFbtCommon")(
          "Attachment blocked by Strict account settings",
        ),
        onOK: _,
        okText: r("WAWebFbtCommon")("OK"),
        onCancel: m,
        cancelText: r("WAWebFbtCommon")("Unblock"),
        okDisabled: l,
        cancelDisabled: l,
        tsNavigationData: {
          surface: "unknown",
          viewName: "quarantined-attachment",
        },
        children: s._(
          /*BTDS*/ "Files from unknown senders may put your personal info or device security at risk. Only unblock this attachment if you trust this sender. {learnMoreLink}",
          [
            s._param(
              "learnMoreLink",
              u.jsx(
                o("WAWebDefenseModeUtils")
                  .WAWebDefenseModeLearnMoreClickableLink,
                {},
              ),
            ),
          ],
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      var e = function () {
        o("WAWebModalManager").ModalManager.close();
      };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        title: s._(/*BTDS*/ "Content no longer available"),
        onCancel: e,
        cancelText: r("WAWebFbtCommon")("OK"),
        tsNavigationData: {
          surface: "unknown",
          viewName: "quarantined-attachment-error",
        },
        children: s._(
          /*BTDS*/ "Make sure you are using the latest version of WhatsApp, or ask the other person to resend the attachment.",
        ),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      o("WAWebModalManager").ModalManager.open(u.jsx(m, {}));
    }
    function _(e) {
      (o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreClick(),
        o("WAWebQuarantineDataStore")
          .getQuarantineData(e.toString())
          .then(function (t) {
            if (t == null) {
              p();
              return;
            }
            o("WAWebModalManager").ModalManager.open(
              u.jsx(d, { msgKey: e, quarantineData: t }),
            );
          })
          .catch(function () {
            p();
          }));
    }
    ((l.WAWebQuarantinedAttachmentInterstitial = d),
      (l.openQuarantinedAttachmentInterstitial = _));
  },
  226,
);
