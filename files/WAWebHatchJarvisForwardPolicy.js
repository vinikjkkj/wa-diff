__d(
  "WAWebHatchJarvisForwardPolicy",
  ["WAWebHatchJsonReaders", "WAWebHatchUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        [/^image\/(?:gif|heic|heif|jpeg|png|webp)$/, "image"],
        [/^video\/(?:mp4|quicktime)$/, "video"],
        [/^audio\/(?:aac|mp4|mpeg|ogg|opus|x-m4a)$/, "audio"],
      ],
      s = /^(?:audio|image|video)\/|^text\/html$|^[^/]*$|\s/,
      u = /^jarvis-media:\/\/[^\s/?#]\S*$/,
      c = /^(?:[-\w.~:/?#[\]@!$&\'()*+,;=]|%[\dA-Fa-f]{2})*$/,
      d = /^https:\/\/[^/?#]*@/i,
      m = new Set([
        "complimentary_subscription",
        "external_link",
        "generic_list",
        "shopping_results",
        "shopping_results_v2",
        "text_with_button",
      ]),
      p = new Set([
        "GenAIMarkdownTextUXPrimitive",
        "GenAIProductItemCardPrimitive",
        "GenAISearchResultPrimitive",
      ]);
    function _(e, t) {
      if (e.hasInlineWidgets || !h(e)) return null;
      var n = t.unifiedResponse.sections;
      if (n.length === 0) return null;
      var r = [];
      for (var o of n) {
        var a = C(o, t.items);
        if (a == null) return null;
        r.push.apply(r, a);
      }
      return R(r, e.fileMetadata)
        ? null
        : r.filter(function (e, t) {
            return (
              r.findIndex(function (t) {
                var n = t.url;
                return n === e.url;
              }) === t
            );
          });
    }
    function f(t) {
      var n,
        r,
        o = (n = t == null ? void 0 : t.toLowerCase()) != null ? n : "",
        a =
          (r = e.find(function (e) {
            var t = e[0];
            return t.test(o);
          })) == null
            ? void 0
            : r[1];
      return a != null ? a : s.test(o) ? null : "document";
    }
    function g(e) {
      return c.test(e)
        ? u.test(e) || (o("WAWebHatchUrl").toHttpsUrl(e) === e && !d.test(e))
        : !1;
    }
    function h(e) {
      var t = e.presentation;
      return t == null
        ? !e.isPresentationRow
        : t.kind === "image_options"
          ? y(t.data, e.fileMetadata)
          : t.kind === "internal_link_action_card"
            ? o("WAWebHatchJsonReaders").readString(t.data, "type") ===
              "external_link"
            : m.has(t.kind);
    }
    function y(e, t) {
      var n,
        r =
          (n = o("WAWebHatchJsonReaders").readArray(e, "images")) != null
            ? n
            : [];
      return (
        r.length > 0 &&
        r.every(function (e) {
          var n = o("WAWebHatchJsonReaders").readString(e, "path");
          return (
            n != null && !o("WAWebHatchJsonReaders").isBlankText(n) && t.has(n)
          );
        })
      );
    }
    function C(e, t) {
      var n,
        r,
        a = o("WAWebHatchJsonReaders").readObject(e, "view_model"),
        i = o("WAWebHatchJsonReaders").readObject(a, "primitive"),
        l =
          (n = o("WAWebHatchJsonReaders").readString(i, "__typename")) != null
            ? n
            : "";
      if (p.has(l)) return [];
      var s =
        l === "GenAIFilePrimitive"
          ? t.get(
              (r = o("WAWebHatchJsonReaders").readString(i, "url")) != null
                ? r
                : "",
            )
          : null;
      return s != null ? b(s) : null;
    }
    function b(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "media" &&
          "media" in e
        ) {
          var t = e.media;
          return v(t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "file" &&
          (e.fileExtension === "htm" || e.fileExtension === "html")
        )
          return null;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.type === "audio" || e.type === "file") &&
          "file" in e
        ) {
          var n = e.file;
          return v([{ file: n, kind: null }]);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.type === "buttons" || e.type === "link_card" || e.type === "list")
        )
          return [];
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "options"
        )
          return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function v(e) {
      var t = e.map(S).filter(Boolean);
      return t.length === e.length ? t : null;
    }
    function S(e) {
      var t,
        n,
        r = e.file,
        o = e.kind,
        a =
          (t = r == null ? void 0 : r.mimeType) != null
            ? t
            : r == null || (n = r.encryptedMedia) == null
              ? void 0
              : n.mimeType,
        i = f(a);
      return r == null ||
        !g(r.url) ||
        a == null ||
        i == null ||
        (o != null && o !== i)
        ? null
        : {
            envelopeFilehash: r.envelopeFilehash,
            family: i,
            mimeType: a,
            url: r.url,
          };
    }
    function R(e, t) {
      var n = new Set(
          e.map(function (e) {
            return e.url;
          }),
        ),
        r = Array.from(t.values()).filter(function (e) {
          return n.has(e.url);
        });
      return (
        L(e, function (e) {
          return [e.url, e.mimeType.toLowerCase()];
        }) ||
        L(r, function (e) {
          return [e.url, E(e)];
        })
      );
    }
    function L(e, t) {
      var n = new Map();
      for (var r of e) {
        var o,
          a = t(r),
          i = a[0],
          l = a[1];
        if (((o = n.get(i)) != null ? o : l) !== l) return !0;
        n.set(i, l);
      }
      return !1;
    }
    function E(e) {
      var t = e.encryptedMedia,
        n = e.envelopeFilehash;
      return JSON.stringify([
        n,
        t == null ? void 0 : t.mediaKey,
        t == null ? void 0 : t.filehash,
        t == null ? void 0 : t.encFilehash,
        t == null ? void 0 : t.directPath,
        t == null ? void 0 : t.mediaType,
      ]);
    }
    ((l.getHatchJarvisForwardMediaRefs = _),
      (l.hatchJarvisMediaFamily = f),
      (l.isHatchJarvisForwardMediaUrl = g));
  },
  98,
);
