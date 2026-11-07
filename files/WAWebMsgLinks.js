__d(
  "WAWebMsgLinks",
  [
    "WAUnicodeUtils",
    "WAUrlSpoofChecksWasmInstance",
    "WAWebFrontendMsgGetters",
    "WAWebLinkify",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMuseGroupRichResponseLinks",
    "WAWebProtobufsE2E.pb",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerGating",
    "WAWebSpoilerNotificationMask",
    "WAWebStateUtils",
    "WAWebSuspiciousLinkMetrics",
    "justknobx",
    "uniqueBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new WeakSet(),
      s = new WeakMap(),
      u = 1e3;
    function c(t) {
      if (
        !(
          !r("justknobx")._("7345") ||
          !o(
            "WAUrlSpoofChecksWasmInstance",
          ).isSuspiciousHostChecksInitialized() ||
          e.has(t)
        )
      ) {
        e.add(t);
        try {
          var n = d(t);
          if (!n) {
            e.delete(t);
            return;
          }
          t.suspiciousHostChecksInitialized = !0;
        } catch (n) {
          (e.delete(t),
            o("WAWebSuspiciousLinkMetrics").recordSuspiciousLinkMetric(
              "cache-exception",
            ),
            o("WAWebLinkify").logSuspiciousHostCheckFailure(n));
        }
      }
    }
    function d(e) {
      var t = o("WAWebMsgGetters").getSender(e) != null,
        n = !0,
        r = Date.now(),
        a = function (a) {
          var e = a;
          return (
            a.forEach(function (i, l) {
              var c = s.get(i),
                d = i;
              ((c == null || c.domain !== i.domain || r >= c.retryAt) &&
                ((d = o("WAWebLinkify").classifyLinkBestEffort(i, t)),
                s.set(d, {
                  domain: d.domain,
                  retryAt: d.suspiciousHostChecksPending === !0 ? r + u : 1 / 0,
                }),
                e === a && (e = a.slice()),
                (e[l] = d)),
                (n = n && d.suspiciousHostChecksPending !== !0));
            }),
            e
          );
        },
        i = a(e.getRawLinks());
      i !== e.getRawLinks() && e.setRawLinks(i);
      var l = a(e.getRawHeaderLinks());
      l !== e.getRawHeaderLinks() && e.setRawHeaderLinks(l);
      var c = a(e.getRawFooterLinks());
      c !== e.getRawFooterLinks() && e.setRawFooterLinks(c);
      var d = e.getRawPollOptionsToLinks();
      if (d != null) {
        var m = new Map(
          Array.from(d, function (e) {
            var t = e[0],
              n = e[1];
            return [t, a(n)];
          }),
        );
        Array.from(m).some(function (e) {
          var t = e[0],
            n = e[1];
          return n !== d.get(t);
        }) && e.setRawPollOptionsToLinks(m);
      }
      return n;
    }
    function m(e) {
      var t = e.content,
        n = e.sender,
        r = e.cachedValue,
        a = r === void 0 ? [] : r,
        i = e.currentIndex,
        l = i === void 0 ? 0 : i,
        s = e.endIndex,
        u = s === void 0 ? 1 / 0 : s;
      if (l >= u) return [a, u];
      var c = o("WAUnicodeUtils").firstNCodepoints(t, u),
        d = !1,
        m = o("WAWebLinkify").findLinks(c, d, n);
      return (
        m.length > 0 &&
          (m = p({
            endIndex: u,
            fullText: t,
            links: m,
            sender: n,
            truncatedText: c,
          })),
        [m, u]
      );
    }
    var p = function (t) {
      var e = t.endIndex,
        n = t.fullText,
        r = t.links,
        a = t.sender,
        i = t.truncatedText,
        l = o("WAUnicodeUtils").numCodepoints(i),
        s = o("WAUnicodeUtils").numCodepoints(n);
      if (l < s && r.length > 0) {
        var u = r[r.length - 1];
        if (u == null || u.index == null || u.url == null || u.href == null)
          return (r.pop(), r);
        var c = o("WAUnicodeUtils").numCodepoints(i.slice(0, u.index)),
          d = c + o("WAUnicodeUtils").numCodepoints(u.url);
        if (d === e) {
          var m = o("WAWebLinkify").findLinks(n, !1, a),
            p = c,
            _ = m[m.length - 1];
          if (_ == null || _.url == null)
            return r.filter(function (e) {
              return e.href !== u.href;
            });
          var f = p + o("WAUnicodeUtils").numCodepoints(_.url);
          if (f > l)
            return r.filter(function (e) {
              return e.href !== u.href;
            });
        }
      }
      return r;
    };
    function _(e, t, n) {
      var r = m({ content: e, sender: t, endIndex: n }),
        o = r[0];
      return o;
    }
    function f(e, t) {
      var n = o("WAWebStateUtils").unproxy(e);
      c(n);
      var r =
          t != null
            ? t
            : n.linksIndexParsed
              ? n.linksIndexParsed
              : o("WAWebMsgGetters").getInitialPageSize(n) + 1,
        a = o("WAWebFrontendMsgGetters").getText(n);
      if (a == null || n.linksIndexParsed === 1 / 0) return n.getRawLinks();
      var i = m({
          content: a,
          sender: o("WAWebMsgGetters").getSender(n),
          cachedValue: n.getRawLinks(),
          currentIndex: n.linksIndexParsed,
          endIndex: r,
        }),
        l = i[0],
        s = i[1];
      return ((n.linksIndexParsed = s), n.setRawLinks(l), l);
    }
    function g(e, t) {
      var n,
        r = o("WAWebStateUtils").unproxy(e);
      if ((c(r), r.pollOptions == null)) return null;
      if (r.getRawPollOptionsToLinks() == null) {
        var a,
          i = new Map(
            (a = r.pollOptions) == null
              ? void 0
              : a.map(function (e) {
                  var t = m({
                      content: e.name,
                      sender: o("WAWebMsgGetters").getSender(r),
                    }),
                    n = t[0];
                  return [e, n];
                }),
          );
        r.setRawPollOptionsToLinks(i);
      }
      return (n = r.getRawPollOptionsToLinks()) == null ? void 0 : n.get(t);
    }
    function h(e, t) {
      if (t) {
        var n, r;
        return (
          e.type === "list" &&
          ((n = e.list) == null ? void 0 : n.listType) ===
            o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
              .SINGLE_SELECT &&
          ((r = e.list) == null ? void 0 : r.title) != null
        );
      }
      return e.isDynamicReplyButtonsMsg === !0 && e.title != null;
    }
    function y(e, t) {
      if (e.getRawHeaderLinks().length > 0) return e.getRawHeaderLinks();
      var n = m({
          content: t,
          sender: o("WAWebMsgGetters").getSender(e),
          cachedValue: e.getRawHeaderLinks(),
        }),
        r = n[0];
      return (r.length > 0 && e.setRawHeaderLinks(r), r);
    }
    function C(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      if ((c(n), h(n, !0))) {
        var r;
        return y(n, ((r = n.list) == null ? void 0 : r.title) || "");
      } else {
        if (h(n, !1)) return y(n, n.title);
        if (
          n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          ((t = n.interactiveHeader) == null ? void 0 : t.title) != null
        )
          return y(n, n.interactiveHeader.title);
      }
      return [];
    }
    function b(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      c(t);
      var n = t.footer;
      if (!o("WAWebMsgGetters").getSupportsMessageFooterLinks(t) || n == null)
        return [];
      if (t.getRawFooterLinks().length > 0) return t.getRawFooterLinks();
      var r = m({
          content: n,
          sender: o("WAWebMsgGetters").getSender(t),
          cachedValue: t.getRawFooterLinks(),
        }),
        a = r[0];
      return (a.length > 0 && t.setRawFooterLinks(a), a);
    }
    var v = new WeakMap();
    function S(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = f(t),
        r = k(t, n),
        a = o("WAWebMsgGetters").getLinkPreview(t),
        i = o("WAWebFrontendMsgGetters").getText(t);
      if (
        i == null ||
        !o("WAWebMsgGetters").getIsSpoiler(t) ||
        !o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(i) ||
        !o("WAWebSpoilerGating").isSpoilerReceiverEnabled()
      )
        return {
          galleryLinks: r,
          isLinkPreviewHidden: !1,
          shouldRenderMessageBubble: a,
          unfilteredGalleryLinks: r,
        };
      var l = L(t, i),
        s = n.filter(function (e) {
          return l.get(e.index) === e.href;
        }),
        u = o("WAWebMsgGetters").getMatchedText(t),
        c = o("WAWebFrontendMsgGetters")
          .getLinksInFullText(t)
          .find(function (e) {
            return (
              i.slice(e.index, e.index + e.url.length) === u ||
              e.url === u ||
              e.href === u
            );
          }),
        d = R(a, u, c, l),
        m = k(t, s),
        p = r.length > 0 && m.length === 0;
      return {
        galleryLinks: m,
        isLinkPreviewHidden: d,
        shouldRenderMessageBubble: a || p,
        unfilteredGalleryLinks: r,
      };
    }
    function R(e, t, n, r) {
      return t === "" ? e : n == null || r.get(n.index) !== n.href;
    }
    function L(e, t) {
      var n = o("WAWebMsgGetters").getSender(e),
        r = v.get(e);
      if (r != null && r.text === t && r.sender === n)
        return r.visibleLinkHrefsByIndex;
      var a = o("WAWebSpoilerNotificationMask").maskSpoilersPreservingLength(
          t,
          { parseBlockCode: !0, parseInlineCode: !0 },
        ),
        i = new Map(
          o("WAWebLinkify")
            .findLinks(a, !1, n)
            .map(function (e) {
              return [e.index, e.href];
            }),
        );
      return (v.set(e, { sender: n, text: t, visibleLinkHrefsByIndex: i }), i);
    }
    function E(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return k(t, f(t));
    }
    function k(e, t) {
      if (e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
        var n = o(
          "WAWebMuseGroupRichResponseLinks",
        ).getMuseGroupRichResponseGalleryLinks(e);
        if (n.length > 0) return n;
      }
      return r("uniqueBy")(t, function (e) {
        return e.href;
      }).filter(function (e) {
        return e.isHttp;
      });
    }
    function I(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        f(t).length > 0 ||
        (t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
          o(
            "WAWebMuseGroupRichResponseLinks",
          ).getMuseGroupRichResponseGalleryLinks(t).length > 0)
      );
    }
    function T(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE || I(t);
    }
    function D(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebFrontendMsgGetters")
        .getLinksInFullText(t)
        .filter(function (e) {
          var t;
          return (t = e.suspiciousCharacters) == null ? void 0 : t.size;
        });
    }
    ((l.refreshSuspiciousLinkClassification = c),
      (l.getLinksFromMsgImpl = m),
      (l.getLinksFromText = _),
      (l.getLinksFromMsg = f),
      (l.getPollOptionLinks = g),
      (l.shouldDisplayHeaderLinks = h),
      (l.getHeaderLinks = C),
      (l.getFooterLinks = b),
      (l.getLinkGalleryRenderState = S),
      (l.getGalleryLinks = E),
      (l.hasLinkGalleryLinks = I),
      (l.shouldListLinkIndexMsg = T),
      (l.getSuspiciousLinks = D));
  },
  98,
);
