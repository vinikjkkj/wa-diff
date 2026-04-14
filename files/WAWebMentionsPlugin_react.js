__d(
  "WAWebMentionsPlugin.react",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebLexicalUtils",
    "WAWebMentionNode",
    "WAWebMiscGatingUtils",
    "WAWebRichTextInputConst",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebWidFactory",
    "react",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t) {
      var n = new RegExp(o("WAWebRichTextInputConst").userJidRegexStr, "g"),
        r = new RegExp(o("WAWebRichTextInputConst").groupJidRegexStr, "g"),
        a = e.matchAll(n),
        i;
      (t === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
        t === o("WAWebGroupType").GroupType.LINKED_SUBGROUP) &&
        (i = e.matchAll(r));
      var l = Array.from(a).map(function (e) {
          return {
            match: e,
            type: o("WAWebMentionNode").MentionTypeEnum.CONTACT,
          };
        }),
        s = Array.from(i != null ? i : []).map(function (e) {
          return {
            match: e,
            type: o("WAWebMentionNode").MentionTypeEnum.GROUP,
          };
        }),
        u = [].concat(l, s);
      u.sort(function (e, t) {
        return e.match.index > t.match.index ? 1 : -1;
      });
      var c = 0;
      return u.map(function (e) {
        var t = e.match,
          n = e.type,
          r = t[1],
          o = t.index,
          a = c,
          i = r.length + 2;
        return (
          (c = t.index + i),
          { jid: r, index: o, lastEndIndex: a, length: i, type: n }
        );
      });
    }
    function c(e, t) {
      var n,
        r,
        a = o("WAWebWidFactory").createUserWidOrThrow(t),
        i =
          (n =
            (e == null ? void 0 : e.isLidAddressingMode) === !0 && !a.isLid()
              ? (r = o("WAWebApiContact").getCurrentLid(a)) == null
                ? void 0
                : r.toString()
              : t) != null
            ? n
            : t;
      return (e == null ? void 0 : e.participants.get(i)) != null;
    }
    function d(e, t, n) {
      if (e.isSimpleText()) {
        var a = e.getTextContent(),
          i = e;
        for (var l of u(a, t == null ? void 0 : t.groupType)) {
          var s = l.index,
            d = l.jid,
            m = l.lastEndIndex,
            p = l.length,
            f = l.type,
            g = s - m,
            h = void 0,
            y = void 0;
          if (g === 0) {
            var C = i.splitText(p);
            ((h = C[0]), (y = C[1]));
          } else {
            var b = i.splitText(g, g + p);
            ((h = b[1]), (y = b[2]));
          }
          i = y;
          var v = void 0;
          if (f === o("WAWebMentionNode").MentionTypeEnum.CONTACT) {
            var S = o("WAWebContactCollection").ContactCollection.get(d);
            if (S != null) {
              var R = !o("WAWebContactGetters").getIsMe(S) && c(t, d);
              if (R || n) {
                var L = S.id.toString(),
                  E = o("WAWebMentionNode").$createMentionNode(
                    _(S, t),
                    L,
                    o("WAWebMentionNode").MentionTypeEnum.CONTACT,
                  );
                (h.replace(E), (v = E));
              } else
                ((v = new (o("Lexical").TextNode)("@" + _(S))), h.replace(v));
            }
          }
          if (f === o("WAWebMentionNode").MentionTypeEnum.GROUP) {
            var k =
                r("WAWebUnjoinedSubgroupMetadataCollection").get(d) ||
                r("WAWebGroupMetadataCollection").get(d),
              I =
                t != null && t.parentGroup
                  ? r("WAWebGroupMetadataCollection").assertGet(t.parentGroup)
                  : null;
            if (k && I) {
              var T = k.id,
                D = k.subject,
                x = [].concat(I.joinedSubgroups, I.unjoinedSubgroups);
              if (x.includes(T)) {
                var $ = o("WAWebMentionNode").$createMentionNode(
                  D,
                  T.toString(),
                  o("WAWebMentionNode").MentionTypeEnum.GROUP,
                );
                (h.replace($), (v = $));
              } else ((v = new (o("Lexical").TextNode)("@" + D)), h.replace(v));
            } else
              k &&
                ((v = new (o("Lexical").TextNode)("@" + k.subject)),
                h.replace(v));
          }
          v || ((v = new (o("Lexical").TextNode)(d)), h.replace(v));
          var P = o("WAWebLexicalUtils").$getRangeSelection();
          P &&
            (!P.anchor.getNode().isAttached() ||
              !P.focus.getNode().isAttached()) &&
            v.select();
        }
      }
    }
    function m(e) {
      var t = o("WAWebLexicalUtils").$getRangeSelection();
      if (t) {
        var n = t.anchor.getNode() === e ? t.anchor.offset : -1,
          r = o("WAWebRichTextInputConst").AT_SYMBOL + e.name,
          a = e.getTextContent();
        if (r !== a) {
          var i = a.startsWith(r) && n === a.length,
            l = a.endsWith(r) && n === a.length - r.length;
          if (i) e.splitText(r.length);
          else if (l) {
            var s = e.splitText(a.length - r.length),
              u = s[0],
              c = s[1];
            (o("WAWebLexicalUtils").$toTextNode(u),
              c.replace(
                o("WAWebMentionNode").$createMentionNode(e.name, e.wid, e.type),
              ));
          } else o("WAWebLexicalUtils").$toTextNode(e);
        }
      }
    }
    function p(e) {
      var t = e.botInvokeEnabled,
        n = e.groupMetadata,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0];
      return (
        s(
          function () {
            var e = a.registerNodeTransform(
                o("Lexical").TextNode,
                function (e) {
                  d(e, n, t);
                },
              ),
              r = a.registerNodeTransform(
                o("WAWebMentionNode").MentionNode,
                function (e) {
                  m(e);
                },
              );
            return function () {
              (e(), r());
            };
          },
          [a, n, t],
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          a,
          o("Lexical").KEY_BACKSPACE_COMMAND,
          function () {
            var e = a.getEditorState().read(function () {
              var e = o("WAWebLexicalUtils").$getRangeSelection();
              if (!(!e || !e.isCollapsed())) {
                var t = e.anchor,
                  n = t.getNode(),
                  r = t.offset === t.getNode().getTextContentSize();
                if (r && n instanceof o("WAWebMentionNode").MentionNode)
                  return n;
              }
            });
            return e
              ? (a.update(function () {
                  return e.remove();
                }),
                !0)
              : !1;
          },
        ),
        null
      );
    }
    function _(e, t) {
      var n;
      if (
        o("WAWebMiscGatingUtils").isDropLastNameEnabled() &&
        t != null &&
        t.hasUniqueShortNameMention(e)
      )
        n = e.shortName;
      else {
        var r = o("WAWebABProps").getABPropConfigValue(
            "elevated_push_names_v2_m2_enabled",
          )
            ? "~"
            : "",
          a = o("WAWebContactGetters").getNotifyName(e);
        n =
          (!o("WAWebFrontendContactGetters").getIsMyContact(e) ||
            o("WAWebContactGetters").getIsMe(e)) &&
          a != null
            ? "" + r + a
            : o("WAWebFrontendContactGetters").getFormattedName(e);
      }
      return n;
    }
    l.default = p;
  },
  98,
);
