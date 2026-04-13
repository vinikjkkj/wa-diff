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
    "react-compiler-runtime",
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
      var n,
        a = o("react-compiler-runtime").c(63),
        i = t.chat,
        l = t.displayAuthor,
        s = t.displayType,
        d = t.msg,
        m,
        p,
        _,
        f,
        g,
        h,
        y;
      if (a[0] !== l || a[1] !== d) {
        h = Symbol.for("react.early_return_sentinel");
        e: {
          if (
            ((m = o("WAWebStateUtils").unproxy(d)),
            (_ = m.ctwaContext),
            (p = o("WAWebCtwaAGMUtils").extractAGMPayload(_)),
            !o("WAWebBizCtwaAGMUtils").isAGMSupported(m))
          ) {
            h = u.jsx(r("WAWebUnsupportedMessage"), {
              msg: m,
              displayAuthor: l,
              hideUpdateButton: !0,
            });
            break e;
          }
          if (
            ((y = o("WAWebMsgModelPropUtils").isTrusted(m.unsafe())), y === !0)
          ) {
            var C = m.unsafe(),
              b;
            (a[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (e || (e = r("stylex")))([
                  c.linkPreview,
                  c.hasAuthorLinkPreview,
                  c.forwardedLinkPreview,
                  c.hasSuspiciousLinksLinkPreview,
                  c.quoteLinkPreview,
                ])),
                (a[9] = b))
              : (b = a[9]),
              (g = u.jsx(r("WAWebBizCtwaContext.react"), {
                msg: C,
                wrapperClass: b,
              })));
          }
        }
        ((a[0] = l),
          (a[1] = d),
          (a[2] = m),
          (a[3] = p),
          (a[4] = _),
          (a[5] = f),
          (a[6] = g),
          (a[7] = h),
          (a[8] = y));
      } else
        ((m = a[2]),
          (p = a[3]),
          (_ = a[4]),
          (f = a[5]),
          (g = a[6]),
          (h = a[7]),
          (y = a[8]));
      if (h !== Symbol.for("react.early_return_sentinel")) return h;
      var v;
      a[10] !== m || a[11] !== s || a[12] !== y
        ? ((v = u.jsx(r("WAWebMessageTextBody.react"), {
            msg: m,
            displayType: s,
            handleLinkClick: null,
            trusted: y,
          })),
          (a[10] = m),
          (a[11] = s),
          (a[12] = y),
          (a[13] = v))
        : (v = a[13]);
      var S = v,
        R;
      a[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { className: "x78zum5 x13a6bvl" }), (a[14] = R))
        : (R = a[14]);
      var L;
      a[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = o("WAWebMessageMeta.react").getAGMTag()), (a[15] = L))
        : (L = a[15]);
      var E;
      a[16] !== m
        ? ((E = u.jsx(
            "div",
            babelHelpers.extends({}, R, {
              "data-testid": void 0,
              children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                msg: m,
                agmTag: L,
              }),
            }),
          )),
          (a[16] = m),
          (a[17] = E))
        : (E = a[17]);
      var k = E,
        I = (n = _) == null ? void 0 : n.sourceId;
      if (p && I != null) {
        var T = p,
          D = T.ctaPayload,
          x = T.ctaText,
          $ = T.ctaType,
          P;
        a[18] !== I || a[19] !== p || a[20] !== d.from || a[21] !== d.id.fromMe
          ? ((P = function () {
              o("WAWebCtwaLogger").logAGMOperation({
                operationType:
                  o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_cta_clicked,
                fromBusiness: d.id.fromMe,
                agmPayload: p,
                businessWid: d.from,
                adId: I,
              });
            }),
            (a[18] = I),
            (a[19] = p),
            (a[20] = d.from),
            (a[21] = d.id.fromMe),
            (a[22] = P))
          : (P = a[22]);
        var N = P;
        e: switch ($) {
          case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.URL: {
            if (D != null && D.length) {
              var M;
              (a[23] !== D || a[24] !== x || a[25] !== N
                ? ((M = u.jsx(r("WAWebBizAGMWebsiteCta.react"), {
                    ctaText: x,
                    link: D,
                    onClick: N,
                  })),
                  (a[23] = D),
                  (a[24] = x),
                  (a[25] = N),
                  (a[26] = M))
                : (M = a[26]),
                (f = M));
            }
            break e;
          }
          case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.CALL: {
            var w;
            (a[27] !== x || a[28] !== N || a[29] !== d.id.fromMe
              ? ((w = u.jsx(r("WAWebBizAGMCallCta.react"), {
                  ctaText: x,
                  disabled: d.id.fromMe,
                  onClick: N,
                })),
                (a[27] = x),
                (a[28] = N),
                (a[29] = d.id.fromMe),
                (a[30] = w))
              : (w = a[30]),
              (f = w));
            break e;
          }
          case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.CATALOG: {
            var A;
            (a[31] !== i || a[32] !== x || a[33] !== N || a[34] !== d.from
              ? ((A = u.jsx(r("WAWebBizAGMCatalogCta.react"), {
                  ctaText: x,
                  businessWid: d.from,
                  chat: i,
                  onClick: N,
                })),
                (a[31] = i),
                (a[32] = x),
                (a[33] = N),
                (a[34] = d.from),
                (a[35] = A))
              : (A = a[35]),
              (f = A));
            break e;
          }
          case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.FLOW:
            if (D != null && D.length) {
              var F;
              (a[36] !== i ||
              a[37] !== D ||
              a[38] !== x ||
              a[39] !== N ||
              a[40] !== d
                ? ((F = u.jsx(r("WAWebBizAGMFlowCta.react"), {
                    ctaText: x,
                    chat: i,
                    onClick: N,
                    ctaPayload: D,
                    msg: d,
                  })),
                  (a[36] = i),
                  (a[37] = D),
                  (a[38] = x),
                  (a[39] = N),
                  (a[40] = d),
                  (a[41] = F))
                : (F = a[41]),
                (f = F));
            }
        }
      }
      var O = m.isDynamicReplyButtonsMsg,
        B;
      a[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = "x1gxa6cn"), (a[42] = B))
        : (B = a[42]);
      var W = m.senderObj,
        q;
      a[43] !== m ? ((q = m.unsafe()), (a[43] = m), (a[44] = q)) : (q = a[44]);
      var U = g,
        V;
      a[45] !== m ? ((V = m.unsafe()), (a[45] = m), (a[46] = V)) : (V = a[46]);
      var H;
      a[47] !== m.id || a[48] !== k || a[49] !== V || a[50] !== S
        ? ((H = u.jsxs(r("WAWebMessageSpacerText.react"), {
            msg: V,
            spacer: !1,
            "data-id": m.id,
            children: [S, k],
          })),
          (a[47] = m.id),
          (a[48] = k),
          (a[49] = V),
          (a[50] = S),
          (a[51] = H))
        : (H = a[51]);
      var G;
      a[52] !== m.senderObj ||
      a[53] !== f ||
      a[54] !== g ||
      a[55] !== H ||
      a[56] !== q
        ? ((G = u.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            className: B,
            contact: W,
            msg: q,
            children: [U, H, f],
          })),
          (a[52] = m.senderObj),
          (a[53] = f),
          (a[54] = g),
          (a[55] = H),
          (a[56] = q),
          (a[57] = G))
        : (G = a[57]);
      var z;
      return (
        a[58] !== m || a[59] !== l || a[60] !== s || a[61] !== G
          ? ((z = u.jsx(r("WAWebMessageTextBubble.react"), {
              msg: m,
              displayType: s,
              displayAuthor: l,
              hideMeta: !0,
              useFixedWidth: O,
              children: G,
            })),
            (a[58] = m),
            (a[59] = l),
            (a[60] = s),
            (a[61] = G),
            (a[62] = z))
          : (z = a[62]),
        z
      );
    }
    l.default = d;
  },
  98,
);
