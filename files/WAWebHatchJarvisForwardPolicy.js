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
      u = 10,
      c = /^jarvis-media:\/\/[^\s/?#]\S*$/,
      d = /^(?:[-\w.~:/?#[\]@!$&\'()*+,;=]|%[\dA-Fa-f]{2})*$/,
      m = /^https:\/\/[^/?#]*@/i,
      p = new Set([
        "complimentary_subscription",
        "external_link",
        "generic_list",
        "shopping_results",
        "shopping_results_v2",
        "text_with_button",
      ]),
      _ = new Set([
        "GenAIMarkdownTextUXPrimitive",
        "GenAISearchResultPrimitive",
      ]);
    function f(e, t) {
      if (e.hasInlineWidgets || !C(e)) return null;
      var n = t.unifiedResponse.sections;
      if (n.length === 0) return null;
      var r = [];
      for (var o of n) {
        var a = v(o, t.items);
        if (a == null) return null;
        r.push.apply(r, a);
      }
      return k(r, e.fileMetadata)
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
    function g(e, t, n) {
      var r = new Set(
          n.map(function (e) {
            return e.url;
          }),
        ),
        o = [];
      for (var a of Array.from(t.items.values()).flatMap(R)) {
        var i = e.fileMetadata.get(a),
          l =
            i != null && i.url === a && c.test(a) && i.envelopeFilehash != null
              ? E({ file: i, kind: "image" })
              : null;
        if (
          (l != null && !r.has(l.url) && (r.add(l.url), o.push(l)),
          o.length === u)
        )
          break;
      }
      return o;
    }
    function h(t) {
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
    function y(e) {
      return d.test(e)
        ? c.test(e) || (o("WAWebHatchUrl").toHttpsUrl(e) === e && !m.test(e))
        : !1;
    }
    function C(e) {
      var t = e.presentation;
      return t == null
        ? !e.isPresentationRow
        : t.kind === "image_options"
          ? b(t.data, e.fileMetadata)
          : t.kind === "internal_link_action_card"
            ? o("WAWebHatchJsonReaders").readString(t.data, "type") ===
              "external_link"
            : p.has(t.kind);
    }
    function b(e, t) {
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
    function v(e, t) {
      var n,
        r,
        a = o("WAWebHatchJsonReaders").readObject(e, "view_model"),
        i = o("WAWebHatchJsonReaders").readObject(a, "primitive"),
        l =
          (n = o("WAWebHatchJsonReaders").readString(i, "__typename")) != null
            ? n
            : "";
      if (_.has(l)) return [];
      var s =
        l === "GenAIFilePrimitive"
          ? t.get(
              (r = o("WAWebHatchJsonReaders").readString(i, "url")) != null
                ? r
                : "",
            )
          : null;
      return s != null ? S(s) : null;
    }
    function S(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "media" &&
          "media" in e
        ) {
          var t = e.media;
          return L(t);
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
          return L([{ file: n, kind: null }]);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.type === "buttons" ||
            e.type === "link_card" ||
            e.type === "list" ||
            e.type === "products")
        )
          return [];
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.type === "options" ||
            e.type === "pairing_launcher" ||
            e.type === "pairing_share")
        )
          return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function R(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "link_card" &&
          "card" in e
        ) {
          var t = e.card;
          return [t.imageUrl].filter(Boolean);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "list" &&
          "list" in e
        ) {
          var n = e.list;
          return n.rows
            .map(function (e) {
              return e.imageUrl;
            })
            .filter(Boolean);
        }
        return [];
      })(e);
    }
    function L(e) {
      var t = e.map(E).filter(Boolean);
      return t.length === e.length ? t : null;
    }
    function E(e) {
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
        i = h(a);
      return r == null ||
        !y(r.url) ||
        a == null ||
        i == null ||
        (o != null && o !== i)
        ? null
        : {
            envelopeFilehash: r.envelopeFilehash,
            family: i,
            mimeType: a.toLowerCase(),
            url: r.url,
          };
    }
    function k(e, t) {
      var n = new Set(
          e.map(function (e) {
            return e.url;
          }),
        ),
        r = Array.from(t.values()).filter(function (e) {
          return n.has(e.url);
        });
      return (
        I(e, function (e) {
          return [e.url, e.mimeType.toLowerCase()];
        }) ||
        I(r, function (e) {
          return [e.url, T(e)];
        })
      );
    }
    function I(e, t) {
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
    function T(e) {
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
    ((l.getHatchJarvisForwardMediaRefs = f),
      (l.getHatchJarvisForwardThumbnailRefs = g),
      (l.hatchJarvisMediaFamily = h),
      (l.isHatchJarvisForwardMediaUrl = y));
  },
  98,
);
