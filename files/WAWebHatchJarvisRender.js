__d(
  "WAWebHatchJarvisRender",
  [
    "WAWebHatchJarvisText",
    "WAWebHatchJarvisWidgets",
    "WAWebHatchJsonReaders",
    "WAWebHatchUrl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "jarvis-item:",
      s = "credentials_vault",
      u = 4,
      c = new Set([
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
      d = new Set(["avi", "m4v", "mov", "mp4", "webm"]),
      m = new Set(["aac", "flac", "m4a", "mp3", "oga", "ogg", "opus", "wav"]);
    function p(t, n, r) {
      var o = t.presentation,
        a = o != null ? S(o, t.displayText, t.fileMetadata, t.messageId) : [],
        i = [].concat(
          a.length > 0 ? a : _(t.displayText, t.fileMetadata),
          t.inlineWidgets.flatMap(v),
          M(t.citations),
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
            s.push(g(d));
            break e;
          }
          if (
            ((typeof c == "object" && c !== null) || typeof c == "function") &&
            c.type === "primitive" &&
            "primitive" in c
          ) {
            var m = c.primitive;
            s.push(h(m));
            break e;
          }
          if (
            ((typeof c == "object" && c !== null) || typeof c == "function") &&
            c.type === "item" &&
            "item" in c
          ) {
            var p = c.item,
              f = "" + e + l.size;
            (l.set(f, C(p, r)), s.push(y(f)));
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
    function _(e, t) {
      var n = [],
        r = [],
        a = [],
        i = !1,
        l = function () {
          var e = r.join("\n").trim();
          (e !== "" && n.push({ text: e, type: "markdown" }), (r = []));
        },
        s = function () {
          (n.push.apply(n, L(a)), (a = []));
        };
      for (var u of e.trim().split("\n")) {
        o("WAWebHatchJarvisText").isHatchJarvisCodeFence(u) && (i = !i);
        var c = i
          ? null
          : o("WAWebHatchJarvisText").parseHatchJarvisEmbedLine(u);
        if (c != null) {
          l();
          for (var d of c) {
            var m,
              p = f(d, (m = t.get(d.url)) != null ? m : null);
            if (p.type === "media") {
              var _;
              (_ = a).push.apply(_, p.media);
            } else (s(), n.push({ item: p, type: "item" }));
          }
          continue;
        }
        (a.length > 0 && u.trim() === "") || (s(), r.push(u));
      }
      return (l(), s(), n);
    }
    function f(e, t) {
      var n,
        r,
        a = e.url.slice(
          o("WAWebHatchJarvisText").HATCH_JARVIS_SANDBOX_PREFIX.length,
        ),
        i = (n = a.split("/").pop()) != null ? n : a,
        l = i.lastIndexOf("."),
        s = l > 0 ? i.slice(l + 1).toLowerCase() : "";
      return c.has(s) || d.has(s)
        ? {
            media: [
              {
                embedUrl: e.url,
                file: t,
                kind: c.has(s) ? "image" : "video",
                label: e.label,
              },
            ],
            type: "media",
          }
        : m.has(s)
          ? { embedUrl: e.url, file: t, label: e.label, type: "audio" }
          : {
              embedUrl: e.url,
              file: t,
              fileExtension: s === "" ? null : s,
              fileName: (r = t == null ? void 0 : t.filename) != null ? r : i,
              type: "file",
            };
    }
    function g(e) {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: {
            __typename: "GenAIMarkdownTextUXPrimitive",
            text: o("WAWebHatchJarvisText").toHatchJarvisWhatsAppEmphasis(e),
          },
        },
      };
    }
    function h(e) {
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
    function y(e) {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: { __typename: "GenAIFilePrimitive", title: e, url: e },
        },
      };
    }
    function C(e, t) {
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
                list: babelHelpers.extends({}, o, { rows: o.rows.map(b) }),
                type: "list",
              };
            }
            return e;
          })(e);
    }
    function b(e) {
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
    function v(e) {
      if (e.kind !== "option") return [];
      var t = R(e.data, e.id);
      return t != null ? [{ item: t, type: "item" }] : [];
    }
    function S(e, t, n, r) {
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
            ? N(i, e.id, n)
            : E(
                k(
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
          var u = R(a, e.id);
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
              g = o("WAWebHatchJarvisWidgets").text(
                o("WAWebHatchJsonReaders").readString(p, "label"),
              ),
              h = _ != null ? n.get(_) : null;
            _ != null &&
              h != null &&
              d.push({
                embedUrl: _,
                file: h,
                kind: "image",
                label: g != null ? g : "",
              });
            var y = g != null ? g : _ != null ? P(_) : null;
            y != null && m.push(y);
          }
          return [].concat(L(d), E(I(m)));
        }
        if (e.kind === "voice_options")
          return E(
            I(
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
          return E(
            k(
              o("WAWebHatchJsonReaders").readString(a, "title"),
              o("WAWebHatchJsonReaders").readString(a, "subtitle"),
            ),
          );
        if (e.kind === "navigation")
          return E(
            k(
              o("WAWebHatchJsonReaders").readString(a, "title"),
              o("WAWebHatchJsonReaders").readString(a, "summary"),
            ),
          );
        if (e.kind === "idea_group") {
          var C = o("WAWebHatchJsonReaders").readObject(a, "navigation");
          return E(
            k(
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
          return E(
            [].concat(
              v != null ? [v] : [],
              o("WAWebHatchJsonReaders")
                .readObjects(b, "elements")
                .map(T)
                .filter(Boolean),
            ),
          );
        }
        if (e.kind === "html") {
          var S,
            D = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "fallback_text"),
            ),
            M = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "html_file"),
            ),
            w = E(D != null ? [D] : []);
          if (
            M == null ||
            !M.startsWith(o("WAWebHatchJarvisText").HATCH_JARVIS_SANDBOX_PREFIX)
          )
            return w;
          var A = f({ label: "", url: M }, (S = n.get(M)) != null ? S : null);
          return A.type === "file"
            ? [].concat(w, [{ item: A, type: "item" }])
            : w;
        }
        if (e.kind === "space_build_completed") {
          var F = o("WAWebHatchJarvisWidgets").spaceCard(a);
          return F != null
            ? [{ primitive: F, type: "primitive" }]
            : E(
                k(
                  o("WAWebHatchJsonReaders").readString(a, "display_name"),
                  o("WAWebHatchJsonReaders").readString(a, "summary"),
                ),
              );
        }
        if (e.kind === "external_link") {
          var O = o("WAWebHatchJarvisWidgets").linkCard(a, t);
          return O != null
            ? [
                {
                  item: { card: O, fileMetadata: n, type: "link_card" },
                  type: "item",
                },
              ]
            : [];
        }
        if (e.kind === "text_with_button") {
          var B = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "text"),
            ),
            W = o("WAWebHatchJarvisWidgets").actionButtons(x(a));
          return [].concat(
            E(B != null ? [B] : []),
            W.length > 0
              ? [{ item: { buttons: W, type: "buttons" }, type: "item" }]
              : [],
          );
        }
        if (e.kind === "complimentary_subscription") {
          var q = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(a, "text"),
          );
          return E(
            [].concat(q != null ? [q] : [], x(a).map($).filter(Boolean)),
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
            z =
              o("WAWebHatchJsonReaders").readString(a, "type") === s
                ? null
                : o("WAWebHatchUrl").toWebUrl(
                    o("WAWebHatchJsonReaders").readString(
                      o("WAWebHatchJsonReaders").readObject(a, "data"),
                      "url",
                    ),
                  );
          return E(
            [H != null && z != null ? "[" + H + "](" + z + ")" : H, G].filter(
              Boolean,
            ),
          );
        }
        return [];
      }
    }
    function R(e, t) {
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
    function L(e) {
      for (var t = [], n = 0; n < e.length; n += u)
        t.push({
          item: { media: e.slice(n, n + u), type: "media" },
          type: "item",
        });
      return t;
    }
    function E(e) {
      return e.length > 0 ? [{ text: e.join("\n"), type: "markdown" }] : [];
    }
    function k(e, t) {
      var n = o("WAWebHatchJarvisWidgets").text(e),
        r = o("WAWebHatchJarvisWidgets").text(t);
      return [].concat(
        n != null ? ["**" + n + "**"] : [],
        r != null ? [r] : [],
      );
    }
    function I(e) {
      return e.map(function (e, t) {
        return t + 1 + ". " + e;
      });
    }
    function T(e) {
      e: {
        var t = o("WAWebHatchJsonReaders").readString(e, "kind");
        if (t === "rich_place") {
          var n = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(e, "name"),
          );
          return n != null
            ? D("**" + n + "**", [
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
            ? D(r, [o("WAWebHatchJsonReaders").readString(e, "subtitle")])
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
          return D(l != null ? "[" + i + "](" + l + ")" : i, [
            (a = o("WAWebHatchJsonReaders").readString(e, "sale_price")) != null
              ? a
              : o("WAWebHatchJsonReaders").readString(e, "price"),
          ]);
        }
        return null;
      }
    }
    function D(e, t) {
      var n = t.map(o("WAWebHatchJarvisWidgets").text).filter(Boolean);
      return n.length > 0 ? "- " + e + ": " + n.join(" \xB7 ") : "- " + e;
    }
    function x(e) {
      var t = o("WAWebHatchJsonReaders").readObject(e, "button");
      return [].concat(
        t != null ? [t] : [],
        o("WAWebHatchJsonReaders").readObjects(e, "secondary_buttons"),
      );
    }
    function $(e) {
      var t = o("WAWebHatchJarvisWidgets").text(
        o("WAWebHatchJsonReaders").readString(e, "label"),
      );
      if (t == null) return null;
      var n = o("WAWebHatchUrl").toWebUrl(
        o("WAWebHatchJsonReaders").readString(e, "url"),
      );
      return n != null ? "[" + t + "](" + n + ")" : t;
    }
    function P(e) {
      var t;
      return (t = e.split("/").pop()) != null ? t : e;
    }
    function N(e, t, n) {
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
            E(k(e.title, e.subtitle)),
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
    function M(e) {
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
            (t = e.domain) != null
              ? t
              : n != null
                ? o("WAWebHatchJarvisWidgets").siteName(n)
                : e.uri,
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
    l.buildHatchJarvisRender = p;
  },
  98,
);
