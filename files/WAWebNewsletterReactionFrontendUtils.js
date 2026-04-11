__d(
  "WAWebNewsletterReactionFrontendUtils",
  [
    "WAWebContactCollection",
    "WAWebEmoji",
    "WAWebFrontendContactGetters",
    "WAWebProfilePicThumbCollection",
    "WAWebReactionsModels",
    "WAWebUserPrefsMeUser",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.length === 0) return { reactions: [], count: 0 };
      var t = e.map(c);
      return s(t);
    }
    function s(e) {
      var t = 0,
        n = new Map();
      for (var r of e) {
        var o = r.count,
          a = r.reactions;
        t += o;
        for (var i of a.entries()) {
          var l = i[0],
            s = i[1],
            u = s[0],
            c = s[1],
            d = n.get(l);
          d != null
            ? ((d.count += c),
              (d.reaction = babelHelpers.extends({}, d.reaction, {
                reactionSenders: d.reaction.reactionSenders.concat(
                  u.reactionSenders,
                ),
              })),
              n.set(l, d))
            : n.set(l, { reaction: u, count: c });
        }
      }
      var m = Array.from(n.values())
        .sort(function (e, t) {
          var n = e.count,
            r = e.reaction,
            o = t.count,
            a = t.reaction;
          return r.reactionByMe != null
            ? -1
            : a.reactionByMe != null
              ? 1
              : o - n;
        })
        .map(function (e) {
          var t = e.count,
            n = e.reaction;
          return [n, t];
        });
      return { count: t, reactions: m };
    }
    function u(e) {
      var t = new Map();
      for (var n of e.entries()) {
        var r,
          a = n[0],
          i = n[1],
          l = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(a),
          s = o("WAWebEmoji").EmojiUtil.getNormalizedOrTofu(a),
          u = (r = t.get(l)) != null ? r : { count: 0, reactions: new Map() };
        (u.reactions.set(s, i), (u.count += i), t.set(l, u));
      }
      return t;
    }
    function c(e) {
      var t = new Map(),
        n = e.myReaction,
        r = e.myReactionMsgKey,
        a = new Map(e.reactionCountMap);
      n != null && n !== "" && !a.has(n) && a.set(n, 1);
      var i = 0,
        l = u(a);
      for (var s of l.entries()) {
        var c,
          d = s[0],
          m = s[1];
        ((i += m.count),
          t.set(d, [
            {
              reactionAggregate: d,
              reactionSenders: _(d, e),
              reactionByMe:
                n != null &&
                r != null &&
                d === o("WAWebEmoji").EmojiUtil.getEmojiAggregate(n)
                  ? {
                      msgKey: r.toString(),
                      orphan: 0,
                      parentMsgKey: e.id.toString(),
                      reactionText:
                        o("WAWebEmoji").EmojiUtil.getNormalizedOrTofu(n),
                      senderUserJid: o("WAWebUserPrefsMeUser")
                        .getMePnUserOrThrow_DO_NOT_USE()
                        .toJid(),
                      timestamp: (c = e.myReactionTs) != null ? c : 0,
                    }
                  : null,
            },
            m.count,
          ]));
      }
      return { reactions: t, count: i };
    }
    function d(e) {
      var t = new Map();
      return (
        e.reactions.map(function (e) {
          var n,
            r = e.reactionCode,
            a = e.senderList,
            i = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(r),
            l = (n = t.get(i)) != null ? n : [];
          t.set(i, l.concat(a));
        }),
        t
      );
    }
    function m(e) {
      var t = d(e),
        n = new Map();
      for (var a of t.entries()) {
        var i = a[0],
          l = a[1],
          s = l
            .sort(function (e, t) {
              var n =
                  (e == null ? void 0 : e.id) != null
                    ? o("WAWebContactCollection").ContactCollection.get(e.id)
                    : null,
                r =
                  (t == null ? void 0 : t.id) != null
                    ? o("WAWebContactCollection").ContactCollection.get(t.id)
                    : null,
                a = (n == null ? void 0 : n.type) === "in",
                i = (r == null ? void 0 : r.type) === "in";
              if (a && n && r && i) {
                var l =
                    o(
                      "WAWebProfilePicThumbCollection",
                    ).ProfilePicThumbCollection.get(n.id) != null,
                  s =
                    o(
                      "WAWebProfilePicThumbCollection",
                    ).ProfilePicThumbCollection.get(r.id) != null;
                return l === s ? 0 : l ? -1 : 1;
              } else if (!a && !i) return 0;
              return a ? -1 : 1;
            })
            .slice(0, 5),
          u = r("compactMap")(s, function (e) {
            return (e == null ? void 0 : e.id) != null
              ? e.id
              : e == null
                ? void 0
                : e.profileUrl;
          });
        n.set(i, u);
      }
      return n;
    }
    function p(e) {
      var t = [];
      return (
        e.reactions.map(function (e) {
          var n = e.reactionCode,
            r = e.senderList;
          r.map(function (e) {
            if ((e == null ? void 0 : e.id) != null) {
              var r = o("WAWebContactCollection").ContactCollection.get(e.id);
              (r == null ? void 0 : r.type) === "in" &&
                t.push({ reaction: n, contact: r });
            }
          });
        }),
        t.sort(function (e, t) {
          var n = o("WAWebFrontendContactGetters").getFormattedUser(e.contact),
            r = o("WAWebFrontendContactGetters").getFormattedUser(t.contact);
          return n.localeCompare(r);
        })
      );
    }
    function _(e, t) {
      var n = t.myReaction,
        r = n != null && e === o("WAWebEmoji").EmojiUtil.getEmojiAggregate(n);
      return [
        new (o("WAWebReactionsModels").ReactionsSenders)({
          id: t.id,
          reactionText: r ? n : e,
          senderUserJid: r
            ? o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().toJid()
            : t.id.remote.toJid(),
          timestamp: t.reactionCountMapTs,
        }),
      ];
    }
    ((l.aggregateAndSortReactions = e),
      (l.getReactionSendersForFacePile = m),
      (l.getContactReactionSenders = p));
  },
  98,
);
