__d(
  "WAWebCoexEditDeleteAlertModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        BUSINESS_DELETE: "business_delete",
        BUSINESS_EDIT: "business_edit",
        CONSUMER_DELETE: "consumer_delete",
        CONSUMER_EDIT: "consumer_edit",
      };
    function d(e) {
      return e === "consumer_edit"
        ? {
            body: s._(
              /*BTDS*/ "This message was edited in this chat on WhatsApp. The business may still be able to see the original message on other platforms.",
            ),
            title: s._(/*BTDS*/ "Edits may only appear on WhatsApp"),
          }
        : e === "business_edit"
          ? {
              body: s._(
                /*BTDS*/ "This message was edited in this chat on WhatsApp. It may not appear on other platforms.",
              ),
              title: s._(/*BTDS*/ "Edits may only appear on WhatsApp"),
            }
          : e === "consumer_delete"
            ? {
                body: s._(
                  /*BTDS*/ "This message was deleted in this chat on WhatsApp. The business may still be able to see it on other platforms.",
                ),
                title: s._(/*BTDS*/ "Messages may only be deleted on WhatsApp"),
              }
            : e === "business_delete"
              ? {
                  body: s._(
                    /*BTDS*/ "This message was deleted in this chat on WhatsApp. It may still appear on other platforms.",
                  ),
                  title: s._(
                    /*BTDS*/ "Messages may only be deleted on WhatsApp",
                  ),
                }
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function m(e) {
      var t = e.alertType,
        n = e.onClose,
        a = d(t),
        i = a.body,
        l = a.title,
        c = t === "business_edit" || t === "business_delete",
        m = c
          ? o("WAWebFaqUrl").getCoexHostedBusinessFaqUrl()
          : o("WAWebFaqUrl").getCoexHostedFaqUrl(),
        p = function () {
          (o("WAWebModalManager").ModalManager.closeAlert("none"),
            self.setTimeout(function () {
              return o("WAWebExternalLink.react").openExternalLink(m);
            }, 10));
        },
        _ = function () {
          n != null
            ? n()
            : o("WAWebModalManager").ModalManager.closeAlert("none");
        },
        f = { onClick: p, text: s._(/*BTDS*/ "Learn more") };
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "coex-edit-delete-alert",
        },
        onOK: _,
        buttonsDirection: "horizontal",
        okText: r("WAWebFbtCommon")("OK"),
        type: o("WAWebModal.react").ModalTheme.Multiline,
        extraButtonProps: f,
        children: [
          u.jsx("strong", { children: l }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          i,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.CoexAlertType = c),
      (l.WAWebCoexEditDeleteAlertModal = m));
  },
  226,
);
