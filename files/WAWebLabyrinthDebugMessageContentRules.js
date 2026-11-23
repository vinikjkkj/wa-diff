__d(
  "WAWebLabyrinthDebugMessageContentRules",
  ["WALongInt", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /\.([a-z0-9]{1,8})$/i,
      s = [
        {
          field: "albumMessage",
          kind: "album",
          read: function (t) {
            var e,
              n,
              r = t.albumMessage;
            return r != null
              ? {
                  contextInfo: r.contextInfo,
                  facts: [
                    {
                      kind: "albumItemCount",
                      photos: (e = r.expectedImageCount) != null ? e : 0,
                      videos: (n = r.expectedVideoCount) != null ? n : 0,
                    },
                  ],
                  texts: [],
                }
              : null;
          },
        },
        {
          field: "conversation",
          kind: "text",
          read: function (t) {
            var e = t.conversation;
            return e != null ? u(e) : null;
          },
        },
        {
          field: "extendedTextMessage",
          kind: "link",
          read: function (t) {
            var e = t.extendedTextMessage;
            return d(e == null ? void 0 : e.matchedText) ||
              d(e == null ? void 0 : e.title)
              ? babelHelpers.extends({}, c(e), {
                  contextInfo: e == null ? void 0 : e.contextInfo,
                  thumbnail: e == null ? void 0 : e.jpegThumbnail,
                })
              : null;
          },
        },
        {
          field: "extendedTextMessage",
          kind: "text",
          read: function (t) {
            var e = t.extendedTextMessage;
            return e != null
              ? babelHelpers.extends({}, u(e.text), {
                  contextInfo: e.contextInfo,
                })
              : null;
          },
        },
        {
          field: "imageMessage",
          kind: "image",
          read: function (t) {
            var e = t.imageMessage;
            return e != null
              ? {
                  contextInfo: e.contextInfo,
                  thumbnail: e.jpegThumbnail,
                  facts: L(e),
                  texts: [e.caption],
                }
              : null;
          },
        },
        {
          field: "videoMessage",
          kind: "gif",
          read: function (t) {
            var e = t.videoMessage;
            return (e == null ? void 0 : e.gifPlayback) === !0
              ? {
                  contextInfo: e.contextInfo,
                  thumbnail: e.jpegThumbnail,
                  facts: [].concat(m(e.gifAttribution), L(e)),
                  texts: [e.caption],
                }
              : null;
          },
        },
        {
          field: "videoMessage",
          kind: "video",
          read: function (t) {
            var e = t.videoMessage;
            return e != null
              ? {
                  contextInfo: e.contextInfo,
                  thumbnail: e.jpegThumbnail,
                  facts: L(e),
                  texts: [e.caption],
                }
              : null;
          },
        },
        {
          field: "ptvMessage",
          kind: "videoNote",
          read: function (t) {
            var e = t.ptvMessage;
            return e != null
              ? {
                  contextInfo: e.contextInfo,
                  thumbnail: e.jpegThumbnail,
                  facts: L(e),
                  texts: [],
                }
              : null;
          },
        },
        {
          field: "locationMessage",
          kind: "location",
          read: function (t) {
            var e = t.locationMessage;
            return e != null
              ? {
                  contextInfo: e.contextInfo,
                  facts: S(e),
                  secondaryText: d(e.name) ? e.address : null,
                  texts: [e.name, e.address],
                  thumbnail: e.jpegThumbnail,
                }
              : null;
          },
        },
        {
          field: "liveLocationMessage",
          kind: "liveLocation",
          read: function (t) {
            var e = t.liveLocationMessage;
            return e != null
              ? {
                  contextInfo: e.contextInfo,
                  facts: S(e),
                  texts: [e.caption],
                  thumbnail: e.jpegThumbnail,
                }
              : null;
          },
        },
        {
          field: "pollCreationMessageV5",
          kind: "quiz",
          read: function (t) {
            var e = t.pollCreationMessageV5;
            return e != null ? h(e) : null;
          },
        },
        {
          field: "pollCreationMessageV6",
          kind: "poll",
          read: function (t) {
            var e = t.pollCreationMessageV6;
            return e != null ? h(e) : null;
          },
        },
        {
          field: "pollCreationMessageV3",
          kind: "poll",
          read: function (t) {
            var e = t.pollCreationMessageV3;
            return e != null ? h(e) : null;
          },
        },
        {
          field: "pollCreationMessageV2",
          kind: "poll",
          read: function (t) {
            var e = t.pollCreationMessageV2;
            return e != null ? h(e) : null;
          },
        },
        {
          field: "pollCreationMessage",
          kind: "poll",
          read: function (t) {
            var e = t.pollCreationMessage;
            return e != null ? h(e) : null;
          },
        },
        {
          field: "pollAddOptionMessage",
          kind: "pollOptionAdded",
          read: function (t) {
            var e,
              n,
              r = t.pollAddOptionMessage;
            return r != null
              ? {
                  facts: [],
                  pollTargetStanzaId:
                    (e = r.pollCreationMessageKey) == null ? void 0 : e.id,
                  texts: [(n = r.addOption) == null ? void 0 : n.optionName],
                }
              : null;
          },
        },
        {
          field: "pollResultSnapshotMessageV3",
          kind: "pollResults",
          read: function (t) {
            var e = t.pollResultSnapshotMessageV3;
            return e != null ? y(e) : null;
          },
        },
        {
          field: "pollResultSnapshotMessage",
          kind: "pollResults",
          read: function (t) {
            var e = t.pollResultSnapshotMessage;
            return e != null ? y(e) : null;
          },
        },
        {
          field: "eventMessage",
          kind: "event",
          read: function (t) {
            var e = t.eventMessage;
            return e != null ? _(e) : null;
          },
        },
        {
          field: "eventInviteMessage",
          kind: "eventInvite",
          read: function (t) {
            var e = t.eventInviteMessage;
            return e != null ? f(e) : null;
          },
        },
        {
          field: "richResponseMessage",
          kind: "metaAiReply",
          read: function (t) {
            var e = t.richResponseMessage;
            return e != null ? p(e) : null;
          },
        },
        {
          field: "stickerMessage",
          kind: "sticker",
          read: function (t) {
            var e = t.stickerMessage;
            return e != null
              ? {
                  contextInfo: e.contextInfo,
                  facts: [{ kind: "stickerStyle", style: C(e) }].concat(L(e)),
                  texts: [e.accessibilityLabel],
                }
              : null;
          },
        },
        {
          field: "stickerPackMessage",
          kind: "stickerPack",
          read: function (t) {
            var e = t.stickerPackMessage;
            return e != null ? b(e) : null;
          },
        },
        {
          field: "musicMessage",
          kind: "music",
          read: function (t) {
            var e,
              n,
              r = t.musicMessage;
            return r != null
              ? {
                  contextInfo: r.contextInfo,
                  facts: [],
                  secondaryText:
                    (e = r.embeddedMusic) == null ? void 0 : e.author,
                  texts: [(n = r.embeddedMusic) == null ? void 0 : n.title],
                }
              : null;
          },
        },
        {
          field: "contactMessage",
          kind: "contact",
          read: function (t) {
            var e = t.contactMessage;
            return e != null
              ? {
                  contextInfo: e.contextInfo,
                  facts: [],
                  texts: [e.displayName],
                }
              : null;
          },
        },
        {
          field: "contactsArrayMessage",
          kind: "contacts",
          read: function (t) {
            var e = t.contactsArrayMessage;
            return e != null ? v(e) : null;
          },
        },
        {
          field: "audioMessage",
          kind: "voiceMessage",
          read: function (t) {
            var e = t.audioMessage;
            return (e == null ? void 0 : e.ptt) === !0
              ? { contextInfo: e.contextInfo, facts: L(e), texts: [] }
              : null;
          },
        },
        {
          field: "audioMessage",
          kind: "audio",
          read: function (t) {
            var e = t.audioMessage;
            return e != null
              ? { contextInfo: e.contextInfo, facts: L(e), texts: [] }
              : null;
          },
        },
        {
          field: "documentMessage",
          kind: "document",
          read: function (t) {
            var e = t.documentMessage;
            return e != null
              ? {
                  contextInfo: e.contextInfo,
                  thumbnail: e.jpegThumbnail,
                  facts: R(e),
                  secondaryText: e.caption,
                  texts: [e.fileName, e.title],
                }
              : null;
          },
        },
      ];
    function u(e) {
      var t,
        n = (t = e == null ? void 0 : e.split("\n")) != null ? t : [];
      return {
        facts:
          e != null && n.length > 1
            ? [
                { count: n.length, kind: "lineCount" },
                { kind: "fullText", value: e },
              ]
            : [],
        texts: [n.find(d)],
      };
    }
    function c(e) {
      var t = e != null ? e : {},
        n = t.description,
        r = t.matchedText,
        o = t.text,
        a = t.title,
        i = u(o),
        l = [d(r) ? { kind: "url", value: r } : null].concat(i.facts, [
          d(a) ? { kind: "linkTitle", value: a } : null,
          d(n) ? { kind: "linkDescription", value: n } : null,
        ]);
      return { facts: l.filter(Boolean), texts: [].concat(i.texts, [a]) };
    }
    function d(e) {
      return e != null && e !== "";
    }
    function m(e) {
      return e != null &&
        e !== o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.NONE
        ? [
            {
              kind: "provider",
              value: o(
                "WAWebProtobufsE2E.pb",
              ).Message$VideoMessage$Attribution.getName(e),
            },
          ]
        : [];
    }
    function p(e) {
      var t = e.submessages
        .map(function (e) {
          return e.messageText;
        })
        .filter(d);
      return {
        contextInfo: e.contextInfo,
        facts:
          t.length > 1
            ? [
                { count: t.length, kind: "sectionCount" },
                { kind: "fullText", value: t.join("\n") },
              ]
            : [],
        texts: t,
      };
    }
    function _(e) {
      var t,
        n = [].concat(g(e), [
          d((t = e.location) == null ? void 0 : t.name)
            ? { kind: "eventPlace", value: e.location.name }
            : null,
          d(e.description)
            ? { kind: "eventDescription", value: e.description }
            : null,
          d(e.joinLink) ? { kind: "callLink", value: e.joinLink } : null,
        ]);
      return {
        canceled: e.isCanceled === !0,
        contextInfo: e.contextInfo,
        facts: n.filter(Boolean),
        texts: [e.name],
      };
    }
    function f(e) {
      var t = [].concat(g(e), [
        d(e.locationName)
          ? { kind: "eventPlace", value: e.locationName }
          : null,
        d(e.callLink) ? { kind: "callLink", value: e.callLink } : null,
      ]);
      return {
        contextInfo: e.contextInfo,
        facts: t.filter(Boolean),
        texts: [e.eventTitle, e.caption],
        thumbnail: e.jpegThumbnail,
      };
    }
    function g(e) {
      var t = e.endTime,
        n = e.startTime,
        r = o("WALongInt").maybeNumber(n),
        a = o("WALongInt").maybeNumber(t),
        i = [
          r != null && r > 0 ? { kind: "eventStart", startSec: r } : null,
          a != null && a > 0 ? { endSec: a, kind: "eventEnd" } : null,
        ];
      return i.filter(Boolean);
    }
    function h(e) {
      var t,
        n,
        r = e.options
          .map(function (e) {
            return e.optionName;
          })
          .filter(d),
        a = o("WALongInt").maybeNumber(e.endTime),
        i = (t = e.correctAnswer) == null ? void 0 : t.optionName,
        l = [
          {
            kind: "pollOptions",
            names: r,
            selectableCount: (n = e.selectableOptionsCount) != null ? n : 0,
          },
          a != null && a > 0 ? { endsAtMs: a, kind: "pollEndsAt" } : null,
          e.hideParticipantName === !0 || e.allowAddOption === !0
            ? {
                allowAddOption: e.allowAddOption === !0,
                hiddenVoters: e.hideParticipantName === !0,
                kind: "pollSettings",
              }
            : null,
          d(i) ? { kind: "correctAnswer", value: i } : null,
        ];
      return {
        contextInfo: e.contextInfo,
        facts: l.filter(Boolean),
        secondaryText: r.join(" \xB7 "),
        texts: [e.name],
      };
    }
    function y(e) {
      var t = e.pollVotes.map(function (e) {
        var t, n;
        return {
          count:
            (t = o("WALongInt").maybeNumber(e.optionVoteCount)) != null ? t : 0,
          option: (n = e.optionName) != null ? n : "",
        };
      });
      return {
        contextInfo: e.contextInfo,
        facts: [{ kind: "pollVoteTotals", votes: t }],
        texts: [e.name],
      };
    }
    function C(e) {
      var t = e.isAnimated,
        n = e.isLottie;
      return n === !0 ? "lottie" : t === !0 ? "animated" : "static";
    }
    function b(e) {
      var t = e.caption,
        n = e.contextInfo,
        r = e.name,
        o = e.publisher,
        a = e.stickers,
        i = [
          a.length > 0 ? { count: a.length, kind: "stickerCount" } : null,
          d(o) ? { kind: "publisher", value: o } : null,
        ];
      return { contextInfo: n, facts: i.filter(Boolean), texts: [r, t] };
    }
    function v(e) {
      var t = e.contacts,
        n = e.contextInfo,
        r = e.displayName,
        o = t
          .map(function (e) {
            return e.displayName;
          })
          .filter(d);
      return {
        contextInfo: n,
        facts:
          t.length > 0
            ? [{ count: t.length, kind: "contactNames", names: o }]
            : [],
        texts: [o.slice(0, 2).join(", "), r],
      };
    }
    function S(e) {
      var t = e.degreesLatitude,
        n = e.degreesLongitude;
      return t != null && n != null
        ? [{ kind: "coordinates", latitude: t, longitude: n }]
        : [];
    }
    function R(t) {
      var n,
        r,
        o =
          (n = e.exec((r = t.fileName) != null ? r : "")) == null
            ? void 0
            : n[1],
        a = t.pageCount,
        i = [
          o != null ? { kind: "fileExtension", value: o.toUpperCase() } : null,
          a != null && a > 0 ? { count: a, kind: "pageCount" } : null,
        ].concat(L(t));
      return i.filter(Boolean);
    }
    function L(e) {
      var t = e.fileLength,
        n = e.height,
        r = e.mimetype,
        a = e.seconds,
        i = e.width,
        l = o("WALongInt").maybeNumber(t),
        s = [
          a != null && a > 0 ? { kind: "duration", seconds: a } : null,
          i != null && n != null && i > 0 && n > 0
            ? { height: n, kind: "dimensions", width: i }
            : null,
          l != null && l > 0 ? { bytes: l, kind: "fileSize" } : null,
          r != null && r !== "" ? { kind: "mimeType", value: r } : null,
        ];
      return s.filter(Boolean);
    }
    l.CONTENT_RULES = s;
  },
  98,
);
