__d(
  "WAWebAGMCtwaMessage.react",
  [
    "WAWebBizAGMCallCta.react",
    "WAWebBizAGMCatalogCta.react",
    "WAWebBizAGMFlowCta.react",
    "WAWebBizAGMWebsiteCta.react",
    "WAWebBizCtwaAGMUtils",
    "WAWebBizCtwaContext.react",
    "WAWebCtwaAGMUtils",
    "WAWebCtwaLogger",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBody.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgModelPropUtils",
    "WAWebStateUtils",
    "WAWebUnsupportedMessage",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        linkPreview: {
          marginTop: "x1198e8h",
          marginInlineEnd: "x1lxpwgx",
          marginBottom: "xzueoph",
          marginInlineStart: "xw01apr",
          $$css: !0,
        },
        hasAuthorLinkPreview: { marginTop: "x1ok221b", $$css: !0 },
        forwardedLinkPreview: { marginTop: "x1ok221b", $$css: !0 },
        hasSuspiciousLinksLinkPreview: { marginTop: "x1ok221b", $$css: !0 },
        quoteLinkPreview: { marginTop: "x1198e8h", $$css: !0 },
      };
    function d(t) {
      var n = t.chat,
        a = t.displayAuthor,
        i = t.displayType,
        l = t.msg,
        s = o("WAWebStateUtils").unproxy(l),
        d = s.ctwaContext,
        m = o("WAWebCtwaAGMUtils").extractAGMPayload(d);
      if (!o("WAWebBizCtwaAGMUtils").isAGMSupported(s))
        return u.jsx(r("WAWebUnsupportedMessage"), {
          msg: s,
          displayAuthor: a,
          hideUpdateButton: !0,
        });
      var p = o("WAWebMsgModelPropUtils").isTrusted(s.unsafe()),
        _,
        f;
      p === !0 &&
        (_ = u.jsx(r("WAWebBizCtwaContext.react"), {
          msg: s.unsafe(),
          wrapperClass: (e || (e = r("stylex")))([
            c.linkPreview,
            c.hasAuthorLinkPreview,
            c.forwardedLinkPreview,
            c.hasSuspiciousLinksLinkPreview,
            c.quoteLinkPreview,
          ]),
        }));
      var g = u.jsx(r("WAWebMessageTextBody.react"), {
          msg: s,
          displayType: i,
          handleLinkClick: null,
          trusted: p,
        }),
        h = u.jsx("div", {
          className: "x78zum5 x13a6bvl",
          "data-testid": void 0,
          children: u.jsx(o("WAWebMessageMeta.react").Meta, {
            msg: s,
            agmTag: o("WAWebMessageMeta.react").getAGMTag(),
          }),
        }),
        y = d == null ? void 0 : d.sourceId;
      if (m && y != null) {
        var C = m.ctaPayload,
          b = m.ctaText,
          v = m.ctaType,
          S = function () {
            o("WAWebCtwaLogger").logAGMOperation({
              operationType:
                o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_cta_clicked,
              fromBusiness: l.id.fromMe,
              agmPayload: m,
              businessWid: l.from,
              adId: y,
            });
          };
        switch (v) {
          case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.URL: {
            C != null &&
              C.length &&
              (f = u.jsx(r("WAWebBizAGMWebsiteCta.react"), {
                ctaText: b,
                link: C,
                onClick: S,
              }));
            break;
          }
          case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.CALL: {
            f = u.jsx(r("WAWebBizAGMCallCta.react"), {
              ctaText: b,
              disabled: l.id.fromMe,
              onClick: S,
            });
            break;
          }
          case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.CATALOG: {
            f = u.jsx(r("WAWebBizAGMCatalogCta.react"), {
              ctaText: b,
              businessWid: l.from,
              chat: n,
              onClick: S,
            });
            break;
          }
          case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.FLOW: {
            C != null &&
              C.length &&
              (f = u.jsx(r("WAWebBizAGMFlowCta.react"), {
                ctaText: b,
                chat: n,
                onClick: S,
                ctaPayload: C,
                msg: l,
              }));
            break;
          }
        }
      }
      return u.jsx(r("WAWebMessageTextBubble.react"), {
        msg: s,
        displayType: i,
        displayAuthor: a,
        hideMeta: !0,
        useFixedWidth: s.isDynamicReplyButtonsMsg,
        children: u.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
          className: "x1gxa6cn",
          contact: s.senderObj,
          msg: s.unsafe(),
          children: [
            _,
            u.jsxs(r("WAWebMessageSpacerText.react"), {
              msg: s.unsafe(),
              spacer: !1,
              "data-id": s.id,
              children: [g, h],
            }),
            f,
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
