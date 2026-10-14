__d(
  "WAWebHatchJarvisRender",
  ["WAWebHatchJarvisWidgets", "WAWebHatchJsonReaders", "WAWebHatchUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "jarvis-item:",
      s = "sandbox://",
      u = 4,
      c = /!\[(.*?)\]\((\S+)\)/g,
      d = /^\s*(```|~~~)/,
      m = new Set([
        "bmp",
        "gif",
        "heic",
        "heif",
        "jpeg",
        "jpg",
        "png",
        "svg",
        "tiff",
        "webp",
      ]),
      p = new Set(["avi", "m4v", "mov", "mp4", "webm"]),
      _ = new Set(["aac", "flac", "m4a", "mp3", "oga", "ogg", "opus", "wav"]);
    function f(t, n) {
      var r = t.presentation,
        o = r != null ? R(r, t.displayText, t.fileMetadata, t.messageId) : [],
        a = [].concat(
          o.length > 0 ? o : g(t.displayText, t.fileMetadata),
          t.inlineWidgets.flatMap(S),
          w(t.citations),
        ),
        i = new Map(),
        l = [];
      for (var s of a)
        e: {
          var u = s;
          if (
            ((typeof u == "object" && u !== null) || typeof u == "function") &&
            u.type === "markdown" &&
            "text" in u
          ) {
            var c = u.text;
            l.push(C(c));
            break e;
          }
          if (
            ((typeof u == "object" && u !== null) || typeof u == "function") &&
            u.type === "primitive" &&
            "primitive" in u
          ) {
            var d = u.primitive;
            l.push(b(d));
            break e;
          }
          if (
            ((typeof u == "object" && u !== null) || typeof u == "function") &&
            u.type === "item" &&
            "item" in u
          ) {
            var m = u.item,
              p = "" + e + i.size;
            (i.set(p, m), l.push(v(p)));
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              u,
          );
        }
      return {
        items: i,
        unifiedResponse: {
          __typename: "XMSGGenAIUnifiedResponse",
          response_id: n,
          sections: l,
        },
      };
    }
    function g(e, t) {
      var n = [],
        r = [],
        o = [],
        a = !1,
        i = function () {
          var e = r.join("\n").trim();
          (e !== "" && n.push({ text: e, type: "markdown" }), (r = []));
        },
        l = function () {
          (n.push.apply(n, E(o)), (o = []));
        };
      for (var s of e.trim().split("\n")) {
        d.test(s) && (a = !a);
        var u = a ? null : h(s);
        if (u != null) {
          i();
          for (var c of u) {
            var m,
              p = y(c, (m = t.get(c.url)) != null ? m : null);
            if (p.type === "media") {
              var _;
              (_ = o).push.apply(_, p.media);
            } else (l(), n.push({ item: p, type: "item" }));
          }
          continue;
        }
        (o.length > 0 && s.trim() === "") || (l(), r.push(s));
      }
      return (i(), l(), n);
    }
    function h(e) {
      var t = e.trim();
      if (t === "" || t.replace(c, "").trim() !== "") return null;
      var n = [];
      for (var r of t.matchAll(c)) {
        var o = r[2];
        if (!o.startsWith(s) || o === s) return null;
        n.push({ label: r[1], url: o });
      }
      return n;
    }
    function y(e, t) {
      var n,
        r,
        o = e.url.slice(s.length),
        a = (n = o.split("/").pop()) != null ? n : o,
        i = a.lastIndexOf("."),
        l = i > 0 ? a.slice(i + 1).toLowerCase() : "";
      return m.has(l) || p.has(l)
        ? {
            media: [
              {
                embedUrl: e.url,
                file: t,
                kind: m.has(l) ? "image" : "video",
                label: e.label,
              },
            ],
            type: "media",
          }
        : _.has(l)
          ? { embedUrl: e.url, file: t, label: e.label, type: "audio" }
          : {
              embedUrl: e.url,
              file: t,
              fileExtension: l === "" ? null : l,
              fileName: (r = t == null ? void 0 : t.filename) != null ? r : a,
              type: "file",
            };
    }
    function C(e) {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: { __typename: "GenAIMarkdownTextUXPrimitive", text: e },
        },
      };
    }
    function b(e) {
      return JSON.parse(
        JSON.stringify({
          __typename: "GenAIUnifiedResponseSection",
          view_model: {
            __typename: "GenAISingleLayoutViewModel",
            primitive: e,
          },
        }),
      );
    }
    function v(e) {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: { __typename: "GenAIFilePrimitive", title: e, url: e },
        },
      };
    }
    function S(e) {
      if (e.kind !== "option") return [];
      var t = L(e.data, e.id);
      return t != null ? [{ item: t, type: "item" }] : [];
    }
    function R(e, t, n, r) {
      var a = e.data;
      e: {
        if (e.kind === "shopping_results" || e.kind === "shopping_results_v2")
          return o("WAWebHatchJarvisWidgets")
            .productCards(a)
            .map(function (e) {
              return { primitive: e, type: "primitive" };
            });
        if (e.kind === "generic_list") {
          var i = o("WAWebHatchJarvisWidgets").list(a);
          return i != null
            ? M(i, e.id)
            : k(
                I(
                  o("WAWebHatchJsonReaders").readString(a, "title"),
                  o("WAWebHatchJsonReaders").readString(a, "subtitle"),
                ),
              );
        }
        if (e.kind === "browser_task") {
          var l = o("WAWebHatchJarvisWidgets").browserTask(a);
          return l != null ? [{ primitive: l, type: "primitive" }] : [];
        }
        if (e.kind === "option") {
          var u = L(a, e.id);
          return u != null ? [{ item: u, type: "item" }] : [];
        }
        if (e.kind === "image_options") {
          var c = o("WAWebHatchJsonReaders").readObjects(a, "images"),
            d = [],
            m = [];
          for (var p of c) {
            var _ = o("WAWebHatchJarvisWidgets").text(
                o("WAWebHatchJsonReaders").readString(p, "path"),
              ),
              f = o("WAWebHatchJarvisWidgets").text(
                o("WAWebHatchJsonReaders").readString(p, "label"),
              ),
              g = _ != null ? n.get(_) : null;
            _ != null &&
              g != null &&
              d.push({
                embedUrl: _,
                file: g,
                kind: "image",
                label: f != null ? f : "",
              });
            var h = f != null ? f : _ != null ? N(_) : null;
            h != null && m.push(h);
          }
          return [].concat(E(d), k(T(m)));
        }
        if (e.kind === "voice_options")
          return k(
            T(
              o("WAWebHatchJsonReaders")
                .readObjects(a, "options")
                .map(function (e) {
                  return o("WAWebHatchJarvisWidgets").text(
                    o("WAWebHatchJsonReaders").readString(e, "name"),
                  );
                })
                .filter(Boolean),
            ),
          );
        if (e.kind === "avatar_share")
          return k(
            I(
              o("WAWebHatchJsonReaders").readString(a, "title"),
              o("WAWebHatchJsonReaders").readString(a, "subtitle"),
            ),
          );
        if (e.kind === "navigation")
          return k(
            I(
              o("WAWebHatchJsonReaders").readString(a, "title"),
              o("WAWebHatchJsonReaders").readString(a, "summary"),
            ),
          );
        if (e.kind === "idea_group") {
          var C = o("WAWebHatchJsonReaders").readObject(a, "navigation");
          return k(
            I(
              o("WAWebHatchJsonReaders").readString(C, "title"),
              o("WAWebHatchJsonReaders").readString(C, "summary"),
            ),
          );
        }
        if (e.kind === "local_map" || e.kind === "marketplace_map") {
          var b = o("WAWebHatchJsonReaders").readObject(a, "typed_data"),
            v = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(b, "motivation"),
            );
          return k(
            [].concat(
              v != null ? [v] : [],
              o("WAWebHatchJsonReaders")
                .readObjects(b, "elements")
                .map(D)
                .filter(Boolean),
            ),
          );
        }
        if (e.kind === "html") {
          var S,
            R = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "fallback_text"),
            ),
            x = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "html_file"),
            ),
            w = k(R != null ? [R] : []);
          if (x == null || !x.startsWith(s)) return w;
          var A = y({ label: "", url: x }, (S = n.get(x)) != null ? S : null);
          return A.type === "file"
            ? [].concat(w, [{ item: A, type: "item" }])
            : w;
        }
        if (e.kind === "space_build_completed") {
          var F = o("WAWebHatchJarvisWidgets").spaceCard(a);
          return F != null
            ? [{ primitive: F, type: "primitive" }]
            : k(
                I(
                  o("WAWebHatchJsonReaders").readString(a, "display_name"),
                  o("WAWebHatchJsonReaders").readString(a, "summary"),
                ),
              );
        }
        if (e.kind === "external_link") {
          var O = o("WAWebHatchJarvisWidgets").linkCard(a, t);
          return O != null
            ? [{ item: { card: O, type: "link_card" }, type: "item" }]
            : [];
        }
        if (e.kind === "text_with_button") {
          var B = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "text"),
            ),
            W = o("WAWebHatchJarvisWidgets").actionButtons($(a));
          return [].concat(
            k(B != null ? [B] : []),
            W.length > 0
              ? [{ item: { buttons: W, type: "buttons" }, type: "item" }]
              : [],
          );
        }
        if (e.kind === "complimentary_subscription") {
          var q = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(a, "text"),
          );
          return k(
            [].concat(q != null ? [q] : [], $(a).map(P).filter(Boolean)),
          );
        }
        if (e.kind === "internal_link_action_card") {
          var U,
            V =
              (U = o("WAWebHatchJarvisWidgets").connectorCard(a, e.id)) != null
                ? U
                : o("WAWebHatchJarvisWidgets").secureCredential(
                    a,
                    r != null ? r : e.id,
                  );
          if (V != null) return [{ primitive: V, type: "primitive" }];
          var H = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "title"),
            ),
            G = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "subtitle"),
            ),
            z = o("WAWebHatchUrl").toWebUrl(
              o("WAWebHatchJsonReaders").readString(
                o("WAWebHatchJsonReaders").readObject(a, "data"),
                "url",
              ),
            );
          return k(
            [H != null && z != null ? "[" + H + "](" + z + ")" : H, G].filter(
              Boolean,
            ),
          );
        }
        return [];
      }
    }
    function L(e, t) {
      var n,
        r = (
          (n = o("WAWebHatchJsonReaders").readArray(e, "options")) != null
            ? n
            : []
        )
          .map(function (e) {
            return typeof e == "string"
              ? o("WAWebHatchJarvisWidgets").text(e)
              : null;
          })
          .filter(Boolean),
        a = o("WAWebHatchJarvisWidgets").text(
          o("WAWebHatchJsonReaders").readString(
            o("WAWebHatchJsonReaders").readObject(e, "custom_input"),
            "placeholder",
          ),
        );
      return r.length === 0 && a == null
        ? null
        : {
            customInputPlaceholder: a,
            options: r,
            type: "options",
            widgetId: t,
          };
    }
    function E(e) {
      for (var t = [], n = 0; n < e.length; n += u)
        t.push({
          item: { media: e.slice(n, n + u), type: "media" },
          type: "item",
        });
      return t;
    }
    function k(e) {
      return e.length > 0 ? [{ text: e.join("\n"), type: "markdown" }] : [];
    }
    function I(e, t) {
      var n = o("WAWebHatchJarvisWidgets").text(e),
        r = o("WAWebHatchJarvisWidgets").text(t);
      return [].concat(
        n != null ? ["**" + n + "**"] : [],
        r != null ? [r] : [],
      );
    }
    function T(e) {
      return e.map(function (e, t) {
        return t + 1 + ". " + e;
      });
    }
    function D(e) {
      e: {
        var t = o("WAWebHatchJsonReaders").readString(e, "kind");
        if (t === "rich_place") {
          var n = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(e, "name"),
          );
          return n != null
            ? x("**" + n + "**", [
                o("WAWebHatchJsonReaders").readString(e, "category"),
                o("WAWebHatchJsonReaders").readString(e, "description"),
              ])
            : null;
        }
        if (t === "marker") {
          var r = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(e, "title"),
          );
          return r != null
            ? x(r, [o("WAWebHatchJsonReaders").readString(e, "subtitle")])
            : null;
        }
        if (t === "marketplace_listing") {
          var a,
            i = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(e, "name"),
            );
          if (i == null) return null;
          var l = o("WAWebHatchUrl").toWebUrl(
            o("WAWebHatchJsonReaders").readString(e, "url"),
          );
          return x(l != null ? "[" + i + "](" + l + ")" : i, [
            (a = o("WAWebHatchJsonReaders").readString(e, "sale_price")) != null
              ? a
              : o("WAWebHatchJsonReaders").readString(e, "price"),
          ]);
        }
        return null;
      }
    }
    function x(e, t) {
      var n = t.map(o("WAWebHatchJarvisWidgets").text).filter(Boolean);
      return n.length > 0 ? "- " + e + ": " + n.join(" \xB7 ") : "- " + e;
    }
    function $(e) {
      var t = o("WAWebHatchJsonReaders").readObject(e, "button");
      return [].concat(
        t != null ? [t] : [],
        o("WAWebHatchJsonReaders").readObjects(e, "secondary_buttons"),
      );
    }
    function P(e) {
      var t = o("WAWebHatchJarvisWidgets").text(
        o("WAWebHatchJsonReaders").readString(e, "label"),
      );
      if (t == null) return null;
      var n = o("WAWebHatchUrl").toWebUrl(
        o("WAWebHatchJsonReaders").readString(e, "url"),
      );
      return n != null ? "[" + t + "](" + n + ")" : t;
    }
    function N(e) {
      var t;
      return (t = e.split("/").pop()) != null ? t : e;
    }
    function M(e, t) {
      var n = [],
        r = e.rows.filter(function (e) {
          var r = o("WAWebHatchJarvisWidgets").connectorCardForRow(e, t);
          return (
            r != null && n.push({ primitive: r, type: "primitive" }),
            r == null
          );
        });
      return n.length === 0
        ? [{ item: { list: e, type: "list" }, type: "item" }]
        : [].concat(
            k(I(e.title, e.subtitle)),
            n,
            r.length > 0
              ? [
                  {
                    item: {
                      list: { rows: r, subtitle: null, title: null },
                      type: "list",
                    },
                    type: "item",
                  },
                ]
              : [],
          );
    }
    function w(e) {
      var t = e.map(function (e) {
        var t,
          n = o("WAWebHatchUrl").toWebUrl(e.uri);
        return {
          __typename: "GenAISourcedItem",
          favicon:
            e.faviconUrl != null
              ? { __typename: "GenAIMediaItem", url: e.faviconUrl }
              : null,
          source_display_name: e.label,
          source_subtitle:
            (t = e.domain) != null ? t : n != null ? A(n) : e.uri,
          source_type: "THIRD_PARTY",
          source_url: n,
        };
      });
      return t.length > 0
        ? [
            {
              primitive: {
                __typename: "GenAISearchResultPrimitive",
                sources: t,
              },
              type: "primitive",
            },
          ]
        : [];
    }
    function A(e) {
      return new URL(e).hostname.replace(/^www\./, "");
    }
    l.buildHatchJarvisRender = f;
  },
  98,
);
