__d(
  "WAWebDeveloperMenuLabyrinthDebugFactPresentation",
  [
    "WAWebClock",
    "WAWebClockDurationFormatters",
    "WAWebDeveloperMenuLabyrinthDebugTimeFormat",
    "WAWebL10nFilesize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = " \xB7 ",
      s = 4,
      u = { animated: "Animated", lottie: "Lottie", static: "Static" };
    function c(t) {
      var n = t
        .map(function (e) {
          return m(e).inline;
        })
        .filter(Boolean);
      return n.length > 0 ? n.join(e) : null;
    }
    function d(e) {
      return e
        .map(function (e) {
          return m(e).detail;
        })
        .filter(Boolean);
    }
    function m(e) {
      return e.kind === "albumItemCount" ||
        e.kind === "dimensions" ||
        e.kind === "duration" ||
        e.kind === "fileExtension" ||
        e.kind === "fileSize" ||
        e.kind === "mimeType" ||
        e.kind === "pageCount" ||
        e.kind === "provider"
        ? p(e)
        : e.kind === "contactNames" ||
            e.kind === "fullText" ||
            e.kind === "placeholderType" ||
            e.kind === "sectionCount" ||
            e.kind === "lineCount" ||
            e.kind === "linkDescription" ||
            e.kind === "linkTitle" ||
            e.kind === "url"
          ? _(e)
          : e.kind === "coordinates"
            ? y(e)
            : e.kind === "publisher" ||
                e.kind === "stickerCount" ||
                e.kind === "stickerStyle"
              ? f(e)
              : e.kind === "correctAnswer" ||
                  e.kind === "pollEndsAt" ||
                  e.kind === "pollOptions" ||
                  e.kind === "pollSettings" ||
                  e.kind === "pollVoteTotals"
                ? g(e)
                : e.kind === "callLink" ||
                    e.kind === "eventDescription" ||
                    e.kind === "eventEnd" ||
                    e.kind === "eventPlace" ||
                    e.kind === "eventStart"
                  ? h(e)
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e.kind,
                      );
                    })();
    }
    function p(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "duration" &&
          "seconds" in e
        ) {
          var t = e.seconds;
          return { inline: o("WAWebClockDurationFormatters").durationStr(t) };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "dimensions" &&
          "width" in e &&
          "height" in e
        ) {
          var n = e.width,
            r = e.height;
          return { inline: n + " \xD7 " + r };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "fileSize" &&
          "bytes" in e
        ) {
          var a = e.bytes;
          return {
            detail: {
              label: "Size",
              testidSuffix: "file_size",
              value:
                o("WAWebL10nFilesize").getL10nFilesize(a) +
                " (" +
                a +
                " bytes)",
            },
            inline: o("WAWebL10nFilesize").getL10nFilesize(a),
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "mimeType" &&
          "value" in e
        ) {
          var i = e.value;
          return {
            detail: { label: "MIME type", testidSuffix: "mime_type", value: i },
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.kind === "provider" || e.kind === "fileExtension") &&
          "value" in e
        ) {
          var l = e.value;
          return { inline: l };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "pageCount" &&
          "count" in e
        ) {
          var s = e.count;
          return { inline: s === 1 ? "1 page" : s + " pages" };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "albumItemCount" &&
          "photos" in e &&
          "videos" in e
        ) {
          var u = e.photos,
            c = e.videos;
          return { inline: C(u, c) };
        }
        return {};
      })(e);
    }
    function _(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "lineCount" &&
          "count" in e
        ) {
          var t = e.count;
          return { inline: t + " lines" };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "sectionCount" &&
          "count" in e
        ) {
          var n = e.count;
          return { inline: b(n, "section") };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "placeholderType" &&
          "value" in e &&
          "parameters" in e
        ) {
          var r = e.value,
            o = e.parameters;
          return {
            detail: {
              label: "Placeholder type",
              testidSuffix: "placeholder_type",
              value: o.length > 0 ? r + " (" + o.join(", ") + ")" : r,
            },
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "contactNames" &&
          "count" in e &&
          "names" in e
        ) {
          var a = e.count,
            i = e.names;
          return {
            detail:
              i.length > 0
                ? {
                    label: "Contacts",
                    testidSuffix: "contacts",
                    value: i.join(", "),
                  }
                : null,
            inline: b(a, "contact"),
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "url" &&
          "value" in e
        ) {
          var l = e.value;
          return {
            detail: { label: "URL", testidSuffix: "url", value: l },
            inline: v(l),
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "fullText" &&
          "value" in e
        ) {
          var s = e.value;
          return {
            detail: { label: "Full text", testidSuffix: "full_text", value: s },
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "linkTitle" &&
          "value" in e
        ) {
          var u = e.value;
          return {
            detail: {
              label: "Link title",
              testidSuffix: "link_title",
              value: u,
            },
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "linkDescription" &&
          "value" in e
        ) {
          var c = e.value;
          return {
            detail: {
              label: "Link description",
              testidSuffix: "link_description",
              value: c,
            },
          };
        }
        return {};
      })(e);
    }
    function f(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "stickerStyle" &&
          "style" in e
        ) {
          var t = e.style;
          return { inline: u[t] };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "stickerCount" &&
          "count" in e
        ) {
          var n = e.count;
          return { inline: b(n, "sticker") };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "publisher" &&
          "value" in e
        ) {
          var r = e.value;
          return {
            detail: { label: "Publisher", testidSuffix: "publisher", value: r },
          };
        }
        return {};
      })(e);
    }
    function g(t) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "pollOptions" &&
          "names" in t &&
          "selectableCount" in t
        ) {
          var n = t.names,
            r = t.selectableCount;
          return {
            inline: [
              b(n.length, "option"),
              r === 1 ? "Select one" : "Select one or more",
            ].join(e),
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "pollEndsAt" &&
          "endsAtMs" in t
        ) {
          var a = t.endsAtMs;
          return {
            detail: {
              label: "Ends at",
              testidSuffix: "poll_ends_at",
              value: o(
                "WAWebDeveloperMenuLabyrinthDebugTimeFormat",
              ).formatLabyrinthDebugDateTime(a),
            },
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "pollSettings" &&
          "allowAddOption" in t &&
          "hiddenVoters" in t
        ) {
          var i = t.allowAddOption,
            l = t.hiddenVoters;
          return {
            detail: {
              label: "Poll settings",
              testidSuffix: "poll_settings",
              value: [
                l ? "Voters hidden" : null,
                i ? "Anyone can add options" : null,
              ]
                .filter(Boolean)
                .join(", "),
            },
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "correctAnswer" &&
          "value" in t
        ) {
          var s = t.value;
          return {
            detail: {
              label: "Correct answer",
              testidSuffix: "correct_answer",
              value: s,
            },
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "pollVoteTotals" &&
          "votes" in t
        ) {
          var u = t.votes;
          return {
            detail: {
              label: "Votes",
              testidSuffix: "poll_votes",
              value: u
                .map(function (e) {
                  var t = e.count,
                    n = e.option;
                  return n + " " + t;
                })
                .join(e),
            },
            inline: b(
              u.reduce(function (e, t) {
                var n = t.count;
                return e + n;
              }, 0),
              "vote",
            ),
          };
        }
        return {};
      })(t);
    }
    function h(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "eventStart" &&
          "startSec" in e
        ) {
          var t = e.startSec;
          return {
            detail: {
              label: "Starts",
              testidSuffix: "event_start",
              value: o(
                "WAWebDeveloperMenuLabyrinthDebugTimeFormat",
              ).formatLabyrinthDebugDateTime(t * 1e3),
            },
            inline:
              o("WAWebClock").Clock.monthDayStr(t) +
              ", " +
              o("WAWebClock").Clock.timestampStr(t),
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "eventEnd" &&
          "endSec" in e
        ) {
          var n = e.endSec;
          return {
            detail: {
              label: "Ends",
              testidSuffix: "event_end",
              value: o(
                "WAWebDeveloperMenuLabyrinthDebugTimeFormat",
              ).formatLabyrinthDebugDateTime(n * 1e3),
            },
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "eventPlace" &&
          "value" in e
        ) {
          var r = e.value;
          return { inline: r };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "eventDescription" &&
          "value" in e
        ) {
          var a = e.value;
          return {
            detail: {
              label: "Description",
              testidSuffix: "event_description",
              value: a,
            },
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "callLink" &&
          "value" in e
        ) {
          var i = e.value;
          return {
            detail: { label: "Call link", testidSuffix: "call_link", value: i },
          };
        }
        return {};
      })(e);
    }
    function y(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "coordinates" &&
          "latitude" in e &&
          "longitude" in e
        ) {
          var t = e.latitude,
            n = e.longitude;
          return {
            detail: {
              label: "Coordinates",
              testidSuffix: "coordinates",
              value: t + ", " + n,
            },
            inline: t.toFixed(s) + ", " + n.toFixed(s),
          };
        }
        return {};
      })(e);
    }
    function C(t, n) {
      var r = [
        t > 0 ? b(t, "photo") : null,
        n > 0 ? b(n, "video") : null,
      ].filter(Boolean);
      return r.length > 0 ? r.join(e) : null;
    }
    function b(e, t) {
      return e + " " + t + (e === 1 ? "" : "s");
    }
    function v(e) {
      try {
        return new URL(e.includes("://") ? e : "https://" + e).hostname;
      } catch (t) {
        return e;
      }
    }
    ((l.formatInlineFacts = c), (l.getFactDetails = d));
  },
  98,
);
