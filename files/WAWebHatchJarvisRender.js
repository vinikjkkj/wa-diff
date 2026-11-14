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
      m = new Set(["aac", "flac", "m4a", "mp3", "oga", "ogg", "opus", "wav"]),
      p = new Map([
        ["c", "c"],
        ["cc", "cpp"],
        ["cjs", "javascript"],
        ["cpp", "cpp"],
        ["css", "css"],
        ["cxx", "cpp"],
        ["go", "go"],
        ["gql", "graphql"],
        ["graphql", "graphql"],
        ["h", "c"],
        ["hpp", "cpp"],
        ["java", "java"],
        ["js", "javascript"],
        ["jsx", "javascript"],
        ["kt", "kotlin"],
        ["kts", "kotlin"],
        ["mjs", "javascript"],
        ["php", "php"],
        ["py", "python"],
        ["rs", "rust"],
        ["sql", "sql"],
        ["swift", "swift"],
        ["ts", "typescript"],
        ["tsx", "typescript"],
      ]);
    function _(t, n, r) {
      var o = t.presentation,
        a = o != null ? E(o, t.displayText, t.fileMetadata, t.messageId) : [],
        i = [].concat(
          a.length > 0 ? a : g(t.displayText, t.fileMetadata),
          t.inlineWidgets.flatMap(L),
          F(t.citations),
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
            s.push(y(d));
            break e;
          }
          if (
            ((typeof c == "object" && c !== null) || typeof c == "function") &&
            c.type === "primitive" &&
            "primitive" in c
          ) {
            var m = c.primitive;
            s.push(C(m));
            break e;
          }
          if (
            ((typeof c == "object" && c !== null) || typeof c == "function") &&
            c.type === "item" &&
            "item" in c
          ) {
            var p = c.item,
              _ = b(p, r == null ? void 0 : r.codeTexts);
            if (_ != null) s.push(_);
            else {
              var f = "" + e + l.size;
              (l.set(f, S(p, r)), s.push(v(f)));
            }
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
    function f(e) {
      return e != null ? p.get(e.toLowerCase()) : null;
    }
    function g(e, t) {
      var n = [],
        r = [],
        a = [],
        i = !1,
        l = function () {
          var e = r.join("\n").trim();
          (e !== "" && n.push({ text: e, type: "markdown" }), (r = []));
        },
        s = function () {
          (n.push.apply(n, I(a)), (a = []));
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
              p = h(d, (m = t.get(d.url)) != null ? m : null);
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
    function h(e, t) {
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
    function y(e) {
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
    function C(e) {
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
    function b(e, t) {
      if (e.type !== "file") return null;
      var n = f(e.fileExtension),
        r = t == null ? void 0 : t.get(e.embedUrl);
      return n == null || r == null
        ? null
        : C({
            __typename: "GenAICodeUXPrimitive",
            code_blocks: [
              { __typename: "GenAICodeBlockData", content: r, type: "DEFAULT" },
            ],
            language: n,
          });
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
    function S(e, t) {
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
                list: babelHelpers.extends({}, o, { rows: o.rows.map(R) }),
                type: "list",
              };
            }
            return e;
          })(e);
    }
    function R(e) {
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
    function L(e) {
      if (e.kind !== "option") return [];
      var t = k(e.data, e.id);
      return t != null ? [{ item: t, type: "item" }] : [];
    }
    function E(e, t, n, r) {
      var a = e.data;
      e: {
        if (e.kind === "shopping_results" || e.kind === "shopping_results_v2") {
          var i = o("WAWebHatchJarvisWidgets").productCards(a, n);
          return i.length > 0
            ? [
                {
                  item: { fileMetadata: n, products: i, type: "products" },
                  type: "item",
                },
              ]
            : [];
        }
        if (e.kind === "generic_list") {
          var l = o("WAWebHatchJarvisWidgets").list(a);
          return l != null
            ? A(l, e.id, n)
            : T(
                D(
                  o("WAWebHatchJsonReaders").readString(a, "title"),
                  o("WAWebHatchJsonReaders").readString(a, "subtitle"),
                ),
              );
        }
        if (e.kind === "browser_task") {
          var u = o("WAWebHatchJarvisWidgets").browserTask(a);
          return u != null ? [{ primitive: u, type: "primitive" }] : [];
        }
        if (e.kind === "option") {
          var c = k(a, e.id);
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
              y = f != null ? n.get(f) : null;
            f != null &&
              y != null &&
              m.push({
                embedUrl: f,
                file: y,
                kind: "image",
                label: g != null ? g : "",
              });
            var C = g != null ? g : f != null ? w(f) : null;
            C != null && p.push(C);
          }
          return [].concat(I(m), T(x(p)));
        }
        if (e.kind === "voice_options")
          return T(
            x(
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
          return T(
            D(
              o("WAWebHatchJsonReaders").readString(a, "title"),
              o("WAWebHatchJsonReaders").readString(a, "subtitle"),
            ),
          );
        if (e.kind === "navigation")
          return T(
            D(
              o("WAWebHatchJsonReaders").readString(a, "title"),
              o("WAWebHatchJsonReaders").readString(a, "summary"),
            ),
          );
        if (e.kind === "idea_group") {
          var b = o("WAWebHatchJsonReaders").readObject(a, "navigation");
          return T(
            D(
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
          return T(
            [].concat(
              S != null ? [S] : [],
              o("WAWebHatchJsonReaders")
                .readObjects(v, "elements")
                .map($)
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
            P = T(L != null ? [L] : []);
          if (
            E == null ||
            !E.startsWith(o("WAWebHatchJarvisText").HATCH_JARVIS_SANDBOX_PREFIX)
          )
            return P;
          var F = h({ label: "", url: E }, (R = n.get(E)) != null ? R : null);
          return F.type === "file"
            ? [].concat(P, [{ item: F, type: "item" }])
            : P;
        }
        if (e.kind === "space_build_completed") {
          var O = o("WAWebHatchJarvisWidgets").spaceCard(a);
          return O != null
            ? [{ primitive: O, type: "primitive" }]
            : T(
                D(
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
            q = o("WAWebHatchJarvisWidgets").actionButtons(N(a));
          return [].concat(
            T(W != null ? [W] : []),
            q.length > 0
              ? [{ item: { buttons: q, type: "buttons" }, type: "item" }]
              : [],
          );
        }
        if (e.kind === "complimentary_subscription") {
          var U = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(a, "text"),
          );
          return T(
            [].concat(U != null ? [U] : [], N(a).map(M).filter(Boolean)),
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
              o("WAWebHatchJsonReaders").readString(a, "type") === s
                ? null
                : o("WAWebHatchUrl").toWebUrl(
                    o("WAWebHatchJsonReaders").readString(
                      o("WAWebHatchJsonReaders").readObject(a, "data"),
                      "url",
                    ),
                  );
          return T(
            [G != null && j != null ? "[" + G + "](" + j + ")" : G, z].filter(
              Boolean,
            ),
          );
        }
        return [];
      }
    }
    function k(e, t) {
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
    function I(e) {
      for (var t = [], n = 0; n < e.length; n += u)
        t.push({
          item: { media: e.slice(n, n + u), type: "media" },
          type: "item",
        });
      return t;
    }
    function T(e) {
      return e.length > 0 ? [{ text: e.join("\n"), type: "markdown" }] : [];
    }
    function D(e, t) {
      var n = o("WAWebHatchJarvisWidgets").text(e),
        r = o("WAWebHatchJarvisWidgets").text(t);
      return [].concat(
        n != null ? ["**" + n + "**"] : [],
        r != null ? [r] : [],
      );
    }
    function x(e) {
      return e.map(function (e, t) {
        return t + 1 + ". " + e;
      });
    }
    function $(e) {
      e: {
        var t = o("WAWebHatchJsonReaders").readString(e, "kind");
        if (t === "rich_place") {
          var n = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(e, "name"),
          );
          return n != null
            ? P("**" + n + "**", [
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
            ? P(r, [o("WAWebHatchJsonReaders").readString(e, "subtitle")])
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
          return P(l != null ? "[" + i + "](" + l + ")" : i, [
            (a = o("WAWebHatchJsonReaders").readString(e, "sale_price")) != null
              ? a
              : o("WAWebHatchJsonReaders").readString(e, "price"),
          ]);
        }
        return null;
      }
    }
    function P(e, t) {
      var n = t.map(o("WAWebHatchJarvisWidgets").text).filter(Boolean);
      return n.length > 0 ? "- " + e + ": " + n.join(" \xB7 ") : "- " + e;
    }
    function N(e) {
      var t = o("WAWebHatchJsonReaders").readObject(e, "button");
      return [].concat(
        t != null ? [t] : [],
        o("WAWebHatchJsonReaders").readObjects(e, "secondary_buttons"),
      );
    }
    function M(e) {
      var t = o("WAWebHatchJarvisWidgets").text(
        o("WAWebHatchJsonReaders").readString(e, "label"),
      );
      if (t == null) return null;
      var n = o("WAWebHatchUrl").toWebUrl(
        o("WAWebHatchJsonReaders").readString(e, "url"),
      );
      return n != null ? "[" + t + "](" + n + ")" : t;
    }
    function w(e) {
      var t;
      return (t = e.split("/").pop()) != null ? t : e;
    }
    function A(e, t, n) {
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
            T(D(e.title, e.subtitle)),
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
    function F(e) {
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
    ((l.buildHatchJarvisRender = _), (l.getHatchJarvisCodeLanguage = f));
  },
  98,
);
