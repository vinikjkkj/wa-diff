__d(
  "WAWebHatchJarvisRender",
  ["WAWebHatchJarvisWidgets", "WAWebHatchJsonReaders", "WAWebHatchUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "jarvis-item:",
      s = "sandbox://",
      u = "credentials_vault",
      c = 4,
      d = /!\[(.*?)\]\((\S+)\)/g,
      m = /^\s*(```|~~~)/,
      p = new Set([
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
      _ = new Set(["avi", "m4v", "mov", "mp4", "webm"]),
      f = new Set(["aac", "flac", "m4a", "mp3", "oga", "ogg", "opus", "wav"]);
    function g(t, n, r) {
      var o = t.presentation,
        a = o != null ? k(o, t.displayText, t.fileMetadata, t.messageId) : [],
        i = [].concat(
          a.length > 0 ? a : h(t.displayText, t.fileMetadata),
          t.inlineWidgets.flatMap(E),
          O(t.citations),
        ),
        l = new Map(),
        s = [];
      for (var u of i)
        e: {
          var c = u;
          if (
            ((typeof c == "object" && c !== null) || typeof c == "function") &&
            c.type === "markdown" &&
            "text" in c
          ) {
            var d = c.text;
            s.push(b(d));
            break e;
          }
          if (
            ((typeof c == "object" && c !== null) || typeof c == "function") &&
            c.type === "primitive" &&
            "primitive" in c
          ) {
            var m = c.primitive;
            s.push(v(m));
            break e;
          }
          if (
            ((typeof c == "object" && c !== null) || typeof c == "function") &&
            c.type === "item" &&
            "item" in c
          ) {
            var p = c.item,
              _ = "" + e + l.size;
            (l.set(_, R(p, r)), s.push(S(_)));
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              c,
          );
        }
      return {
        items: l,
        unifiedResponse: {
          __typename: "XMSGGenAIUnifiedResponse",
          response_id: n,
          sections: s,
        },
      };
    }
    function h(e, t) {
      var n = [],
        r = [],
        o = [],
        a = !1,
        i = function () {
          var e = r.join("\n").trim();
          (e !== "" && n.push({ text: e, type: "markdown" }), (r = []));
        },
        l = function () {
          (n.push.apply(n, T(o)), (o = []));
        };
      for (var s of e.trim().split("\n")) {
        m.test(s) && (a = !a);
        var u = a ? null : y(s);
        if (u != null) {
          i();
          for (var c of u) {
            var d,
              p = C(c, (d = t.get(c.url)) != null ? d : null);
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
    function y(e) {
      var t = e.trim();
      if (t === "" || t.replace(d, "").trim() !== "") return null;
      var n = [];
      for (var r of t.matchAll(d)) {
        var o = r[2];
        if (!o.startsWith(s) || o === s) return null;
        n.push({ label: r[1], url: o });
      }
      return n;
    }
    function C(e, t) {
      var n,
        r,
        o = e.url.slice(s.length),
        a = (n = o.split("/").pop()) != null ? n : o,
        i = a.lastIndexOf("."),
        l = i > 0 ? a.slice(i + 1).toLowerCase() : "";
      return p.has(l) || _.has(l)
        ? {
            media: [
              {
                embedUrl: e.url,
                file: t,
                kind: p.has(l) ? "image" : "video",
                label: e.label,
              },
            ],
            type: "media",
          }
        : f.has(l)
          ? { embedUrl: e.url, file: t, label: e.label, type: "audio" }
          : {
              embedUrl: e.url,
              file: t,
              fileExtension: l === "" ? null : l,
              fileName: (r = t == null ? void 0 : t.filename) != null ? r : a,
              type: "file",
            };
    }
    function b(e) {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: { __typename: "GenAIMarkdownTextUXPrimitive", text: e },
        },
      };
    }
    function v(e) {
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
    function S(e) {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: { __typename: "GenAIFilePrimitive", title: e, url: e },
        },
      };
    }
    function R(e, t) {
      return (t == null ? void 0 : t.readOnly) !== !0
        ? e
        : (function (t) {
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "buttons" &&
              "buttons" in t
            ) {
              var n = t.buttons;
              return {
                buttons: n.map(function (e) {
                  return e.url == null
                    ? babelHelpers.extends({}, e, { isDisabled: !0 })
                    : e;
                }),
                type: "buttons",
              };
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "list" &&
              "fileMetadata" in t &&
              "list" in t
            ) {
              var r = t.fileMetadata,
                o = t.list;
              return {
                fileMetadata: r,
                list: babelHelpers.extends({}, o, { rows: o.rows.map(L) }),
                type: "list",
              };
            }
            return e;
          })(e);
    }
    function L(e) {
      var t = e.flight;
      return t != null
        ? babelHelpers.extends({}, e, {
            flight: babelHelpers.extends({}, t, {
              bookingMessage: null,
              bookingTitle: null,
            }),
          })
        : e;
    }
    function E(e) {
      if (e.kind !== "option") return [];
      var t = I(e.data, e.id);
      return t != null ? [{ item: t, type: "item" }] : [];
    }
    function k(e, t, n, r) {
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
            ? F(i, e.id, n)
            : D(
                x(
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
          var c = I(a, e.id);
          return c != null ? [{ item: c, type: "item" }] : [];
        }
        if (e.kind === "image_options") {
          var d = o("WAWebHatchJsonReaders").readObjects(a, "images"),
            m = [],
            p = [];
          for (var _ of d) {
            var f = o("WAWebHatchJarvisWidgets").text(
                o("WAWebHatchJsonReaders").readString(_, "path"),
              ),
              g = o("WAWebHatchJarvisWidgets").text(
                o("WAWebHatchJsonReaders").readString(_, "label"),
              ),
              h = f != null ? n.get(f) : null;
            f != null &&
              h != null &&
              m.push({
                embedUrl: f,
                file: h,
                kind: "image",
                label: g != null ? g : "",
              });
            var y = g != null ? g : f != null ? A(f) : null;
            y != null && p.push(y);
          }
          return [].concat(T(m), D($(p)));
        }
        if (e.kind === "voice_options")
          return D(
            $(
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
          return D(
            x(
              o("WAWebHatchJsonReaders").readString(a, "title"),
              o("WAWebHatchJsonReaders").readString(a, "subtitle"),
            ),
          );
        if (e.kind === "navigation")
          return D(
            x(
              o("WAWebHatchJsonReaders").readString(a, "title"),
              o("WAWebHatchJsonReaders").readString(a, "summary"),
            ),
          );
        if (e.kind === "idea_group") {
          var b = o("WAWebHatchJsonReaders").readObject(a, "navigation");
          return D(
            x(
              o("WAWebHatchJsonReaders").readString(b, "title"),
              o("WAWebHatchJsonReaders").readString(b, "summary"),
            ),
          );
        }
        if (e.kind === "local_map" || e.kind === "marketplace_map") {
          var v = o("WAWebHatchJsonReaders").readObject(a, "typed_data"),
            S = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(v, "motivation"),
            );
          return D(
            [].concat(
              S != null ? [S] : [],
              o("WAWebHatchJsonReaders")
                .readObjects(v, "elements")
                .map(P)
                .filter(Boolean),
            ),
          );
        }
        if (e.kind === "html") {
          var R,
            L = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "fallback_text"),
            ),
            E = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "html_file"),
            ),
            k = D(L != null ? [L] : []);
          if (E == null || !E.startsWith(s)) return k;
          var N = C({ label: "", url: E }, (R = n.get(E)) != null ? R : null);
          return N.type === "file"
            ? [].concat(k, [{ item: N, type: "item" }])
            : k;
        }
        if (e.kind === "space_build_completed") {
          var O = o("WAWebHatchJarvisWidgets").spaceCard(a);
          return O != null
            ? [{ primitive: O, type: "primitive" }]
            : D(
                x(
                  o("WAWebHatchJsonReaders").readString(a, "display_name"),
                  o("WAWebHatchJsonReaders").readString(a, "summary"),
                ),
              );
        }
        if (e.kind === "external_link") {
          var B = o("WAWebHatchJarvisWidgets").linkCard(a, t);
          return B != null
            ? [
                {
                  item: { card: B, fileMetadata: n, type: "link_card" },
                  type: "item",
                },
              ]
            : [];
        }
        if (e.kind === "text_with_button") {
          var W = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "text"),
            ),
            q = o("WAWebHatchJarvisWidgets").actionButtons(M(a));
          return [].concat(
            D(W != null ? [W] : []),
            q.length > 0
              ? [{ item: { buttons: q, type: "buttons" }, type: "item" }]
              : [],
          );
        }
        if (e.kind === "complimentary_subscription") {
          var U = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(a, "text"),
          );
          return D(
            [].concat(U != null ? [U] : [], M(a).map(w).filter(Boolean)),
          );
        }
        if (e.kind === "internal_link_action_card") {
          var V,
            H =
              (V = o("WAWebHatchJarvisWidgets").connectorCard(a, e.id)) != null
                ? V
                : o("WAWebHatchJarvisWidgets").secureCredential(
                    a,
                    r != null ? r : e.id,
                  );
          if (H != null) return [{ primitive: H, type: "primitive" }];
          var G = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "title"),
            ),
            z = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "subtitle"),
            ),
            j =
              o("WAWebHatchJsonReaders").readString(a, "type") === u
                ? null
                : o("WAWebHatchUrl").toWebUrl(
                    o("WAWebHatchJsonReaders").readString(
                      o("WAWebHatchJsonReaders").readObject(a, "data"),
                      "url",
                    ),
                  );
          return D(
            [G != null && j != null ? "[" + G + "](" + j + ")" : G, z].filter(
              Boolean,
            ),
          );
        }
        return [];
      }
    }
    function I(e, t) {
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
    function T(e) {
      for (var t = [], n = 0; n < e.length; n += c)
        t.push({
          item: { media: e.slice(n, n + c), type: "media" },
          type: "item",
        });
      return t;
    }
    function D(e) {
      return e.length > 0 ? [{ text: e.join("\n"), type: "markdown" }] : [];
    }
    function x(e, t) {
      var n = o("WAWebHatchJarvisWidgets").text(e),
        r = o("WAWebHatchJarvisWidgets").text(t);
      return [].concat(
        n != null ? ["**" + n + "**"] : [],
        r != null ? [r] : [],
      );
    }
    function $(e) {
      return e.map(function (e, t) {
        return t + 1 + ". " + e;
      });
    }
    function P(e) {
      e: {
        var t = o("WAWebHatchJsonReaders").readString(e, "kind");
        if (t === "rich_place") {
          var n = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(e, "name"),
          );
          return n != null
            ? N("**" + n + "**", [
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
            ? N(r, [o("WAWebHatchJsonReaders").readString(e, "subtitle")])
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
          return N(l != null ? "[" + i + "](" + l + ")" : i, [
            (a = o("WAWebHatchJsonReaders").readString(e, "sale_price")) != null
              ? a
              : o("WAWebHatchJsonReaders").readString(e, "price"),
          ]);
        }
        return null;
      }
    }
    function N(e, t) {
      var n = t.map(o("WAWebHatchJarvisWidgets").text).filter(Boolean);
      return n.length > 0 ? "- " + e + ": " + n.join(" \xB7 ") : "- " + e;
    }
    function M(e) {
      var t = o("WAWebHatchJsonReaders").readObject(e, "button");
      return [].concat(
        t != null ? [t] : [],
        o("WAWebHatchJsonReaders").readObjects(e, "secondary_buttons"),
      );
    }
    function w(e) {
      var t = o("WAWebHatchJarvisWidgets").text(
        o("WAWebHatchJsonReaders").readString(e, "label"),
      );
      if (t == null) return null;
      var n = o("WAWebHatchUrl").toWebUrl(
        o("WAWebHatchJsonReaders").readString(e, "url"),
      );
      return n != null ? "[" + t + "](" + n + ")" : t;
    }
    function A(e) {
      var t;
      return (t = e.split("/").pop()) != null ? t : e;
    }
    function F(e, t, n) {
      var r = [],
        a = e.rows.filter(function (e) {
          var n = o("WAWebHatchJarvisWidgets").connectorCardForRow(e, t);
          return (
            n != null && r.push({ primitive: n, type: "primitive" }),
            n == null
          );
        });
      return r.length === 0
        ? [{ item: { fileMetadata: n, list: e, type: "list" }, type: "item" }]
        : [].concat(
            D(x(e.title, e.subtitle)),
            r,
            a.length > 0
              ? [
                  {
                    item: {
                      fileMetadata: n,
                      list: { rows: a, subtitle: null, title: null },
                      type: "list",
                    },
                    type: "item",
                  },
                ]
              : [],
          );
    }
    function O(e) {
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
            (t = e.domain) != null ? t : n != null ? B(n) : e.uri,
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
    function B(e) {
      return new URL(e).hostname.replace(/^www\./, "");
    }
    l.buildHatchJarvisRender = g;
  },
  98,
);
