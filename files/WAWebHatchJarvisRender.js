__d(
  "WAWebHatchJarvisRender",
  [
    "fbt",
    "WAWebHatchFrontendGating",
    "WAWebHatchJarvisText",
    "WAWebHatchJarvisWidgets",
    "WAWebHatchJsonReaders",
    "WAWebHatchPeerInvitationLinkText",
    "WAWebHatchPeerInvite",
    "WAWebHatchShoppingData",
    "WAWebHatchShoppingGate.react",
    "WAWebHatchUrl",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "jarvis-item:",
      u = "credentials_vault",
      c = "share",
      d = 4,
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
      _ = new Set(["aac", "flac", "m4a", "mp3", "oga", "ogg", "opus", "wav"]),
      f = new Map([
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
    function g(t, n, r) {
      var o = t.presentation,
        a =
          o != null
            ? T(
                o,
                t.displayText,
                t.fileMetadata,
                t.messageId,
                (r == null ? void 0 : r.readOnly) === !0,
                r == null ? void 0 : r.shoppingEnabled,
              )
            : [],
        i = [].concat(
          a.length > 0 ? a : C(t.displayText, t.fileMetadata),
          t.inlineWidgets.flatMap(I),
          H(t.citations),
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
            s.push(v(d));
            break e;
          }
          if (
            ((typeof c == "object" && c !== null) || typeof c == "function") &&
            c.type === "primitive" &&
            "primitive" in c
          ) {
            var m = c.primitive;
            s.push(S(m));
            break e;
          }
          if (
            ((typeof c == "object" && c !== null) || typeof c == "function") &&
            c.type === "item" &&
            "item" in c
          ) {
            var p = c.item,
              _ = R(p, r == null ? void 0 : r.codeTexts);
            if (_ != null) s.push(_);
            else {
              var f = "" + e + l.size;
              (l.set(f, E(p, r)), s.push(L(f)));
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
    function h(e, t, n) {
      var r = e == null ? void 0 : e.presentation;
      return (
        !n &&
        e != null &&
        r != null &&
        (r.kind === "shopping_results" || r.kind === "shopping_results_v2") &&
        o("WAWebHatchShoppingData").decodeShoppingResults(
          r.data,
          e.fileMetadata,
        ).products.length > 0 &&
        o("WAWebHatchShoppingGate.react").isHatchShoppingEnabled(t)
      );
    }
    function y(e) {
      return e != null ? f.get(e.toLowerCase()) : null;
    }
    function C(e, t) {
      var n = [],
        r = [],
        a = [],
        i = !1,
        l = function () {
          var e = r.join("\n").trim();
          (e !== "" && n.push({ text: e, type: "markdown" }), (r = []));
        },
        s = function () {
          (n.push.apply(n, M(a)), (a = []));
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
              p = b(d, (m = t.get(d.url)) != null ? m : null);
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
    function b(e, t) {
      var n,
        r,
        a = e.url.slice(
          o("WAWebHatchJarvisText").HATCH_JARVIS_SANDBOX_PREFIX.length,
        ),
        i = (n = a.split("/").pop()) != null ? n : a,
        l = i.lastIndexOf("."),
        s = l > 0 ? i.slice(l + 1).toLowerCase() : "";
      return m.has(s) || p.has(s)
        ? {
            media: [
              {
                embedUrl: e.url,
                file: t,
                kind: m.has(s) ? "image" : "video",
                label: e.label,
              },
            ],
            type: "media",
          }
        : _.has(s)
          ? { embedUrl: e.url, file: t, label: e.label, type: "audio" }
          : {
              embedUrl: e.url,
              file: t,
              fileExtension: s === "" ? null : s,
              fileName: (r = t == null ? void 0 : t.filename) != null ? r : i,
              type: "file",
            };
    }
    function v(e) {
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
    function S(e) {
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
    function R(e, t) {
      if (e.type !== "file") return null;
      var n = y(e.fileExtension),
        r = t == null ? void 0 : t.get(e.embedUrl);
      return n == null || r == null
        ? null
        : S({
            __typename: "GenAICodeUXPrimitive",
            code_blocks: [
              { __typename: "GenAICodeBlockData", content: r, type: "DEFAULT" },
            ],
            language: n,
          });
    }
    function L(e) {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: { __typename: "GenAIFilePrimitive", title: e, url: e },
        },
      };
    }
    function E(e, t) {
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
                list: babelHelpers.extends({}, o, { rows: o.rows.map(k) }),
                type: "list",
              };
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "pairing_launcher" &&
              "card" in t
            ) {
              var a = t.card;
              return { card: a, isReadOnly: !0, type: "pairing_launcher" };
            }
            return e;
          })(e);
    }
    function k(e) {
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
    function I(e) {
      if (e.kind !== "option") return [];
      var t = N(e.data, e.id);
      return t != null ? [{ item: t, type: "item" }] : [];
    }
    function T(e, t, n, r, a, i) {
      var l = e.data;
      e: {
        if (e.kind === "shopping_results" || e.kind === "shopping_results_v2") {
          var s = o("WAWebHatchJarvisWidgets").productCards(l, n),
            c =
              !a &&
              o("WAWebHatchShoppingData").decodeShoppingResults(l, n).products
                .length > 0 &&
              (i != null
                ? i
                : o(
                    "WAWebHatchShoppingGate.react",
                  ).isHatchShoppingRenderEnabled());
          return s.length > 0 || c
            ? [
                {
                  item: {
                    fileMetadata: n,
                    products: s,
                    shoppingData: l,
                    widgetId: e.id,
                    type: "products",
                  },
                  type: "item",
                },
              ]
            : [];
        }
        if (e.kind === "generic_list") {
          var d = o("WAWebHatchJarvisWidgets").list(l);
          return d != null
            ? V(d, e.id, n)
            : w(
                A(
                  o("WAWebHatchJsonReaders").readString(l, "title"),
                  o("WAWebHatchJsonReaders").readString(l, "subtitle"),
                ),
              );
        }
        if (e.kind === "browser_task") {
          var m = o("WAWebHatchJarvisWidgets").browserTask(l);
          return m != null ? [{ primitive: m, type: "primitive" }] : [];
        }
        if (e.kind === "option") {
          var p = N(l, e.id);
          return p != null ? [{ item: p, type: "item" }] : [];
        }
        if (e.kind === "image_options") {
          var _ = o("WAWebHatchJsonReaders").readObjects(l, "images"),
            f = [],
            g = [];
          for (var h of _) {
            var y = o("WAWebHatchJarvisWidgets").text(
                o("WAWebHatchJsonReaders").readString(h, "path"),
              ),
              C = o("WAWebHatchJarvisWidgets").text(
                o("WAWebHatchJsonReaders").readString(h, "label"),
              ),
              v = y != null ? n.get(y) : null;
            y != null &&
              v != null &&
              f.push({
                embedUrl: y,
                file: v,
                kind: "image",
                label: C != null ? C : "",
              });
            var S = C != null ? C : y != null ? U(y) : null;
            S != null && g.push(S);
          }
          return [].concat(M(f), w(F(g)));
        }
        if (e.kind === "voice_options")
          return w(
            F(
              o("WAWebHatchJsonReaders")
                .readObjects(l, "options")
                .map(function (e) {
                  return o("WAWebHatchJarvisWidgets").text(
                    o("WAWebHatchJsonReaders").readString(e, "name"),
                  );
                })
                .filter(Boolean),
            ),
          );
        if (e.kind === "avatar_share")
          return w(
            A(
              o("WAWebHatchJsonReaders").readString(l, "title"),
              o("WAWebHatchJsonReaders").readString(l, "subtitle"),
            ),
          );
        if (e.kind === "navigation")
          return w(
            A(
              o("WAWebHatchJsonReaders").readString(l, "title"),
              o("WAWebHatchJsonReaders").readString(l, "summary"),
            ),
          );
        if (e.kind === "idea_group") {
          var R = o("WAWebHatchJsonReaders").readObject(l, "navigation");
          return w(
            A(
              o("WAWebHatchJsonReaders").readString(R, "title"),
              o("WAWebHatchJsonReaders").readString(R, "summary"),
            ),
          );
        }
        if (e.kind === "local_map" || e.kind === "marketplace_map") {
          var L = o("WAWebHatchJsonReaders").readObject(l, "typed_data"),
            E = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(L, "motivation"),
            );
          return w(
            [].concat(
              E != null ? [E] : [],
              o("WAWebHatchJsonReaders")
                .readObjects(L, "elements")
                .map(O)
                .filter(Boolean),
            ),
          );
        }
        if (e.kind === "html") {
          var k,
            I = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(l, "fallback_text"),
            ),
            T = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(l, "html_file"),
            ),
            x = w(I != null ? [I] : []);
          if (
            T == null ||
            !T.startsWith(o("WAWebHatchJarvisText").HATCH_JARVIS_SANDBOX_PREFIX)
          )
            return x;
          var $ = b({ label: "", url: T }, (k = n.get(T)) != null ? k : null);
          return $.type === "file"
            ? [].concat(x, [{ item: $, type: "item" }])
            : x;
        }
        if (e.kind === "space_build_completed") {
          var P = o("WAWebHatchJarvisWidgets").spaceCard(l);
          return P != null
            ? [{ primitive: P, type: "primitive" }]
            : w(
                A(
                  o("WAWebHatchJsonReaders").readString(l, "display_name"),
                  o("WAWebHatchJsonReaders").readString(l, "summary"),
                ),
              );
        }
        if (e.kind === "external_link") {
          var B = o("WAWebHatchJarvisWidgets").linkCard(l, t);
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
          var H = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(l, "text"),
            ),
            G = o("WAWebHatchJarvisWidgets").actionButtons(W(l));
          return [].concat(
            w(H != null ? [H] : []),
            G.length > 0
              ? [{ item: { buttons: G, type: "buttons" }, type: "item" }]
              : [],
          );
        }
        if (e.kind === "pairing_launcher") return D(l, t);
        if (e.kind === "complimentary_subscription") {
          var z = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(l, "text"),
          );
          return w(
            [].concat(z != null ? [z] : [], W(l).map(q).filter(Boolean)),
          );
        }
        if (e.kind === "internal_link_action_card") {
          var j,
            K =
              (j = o("WAWebHatchJarvisWidgets").connectorCard(l, e.id)) != null
                ? j
                : o("WAWebHatchJarvisWidgets").secureCredential(
                    l,
                    r != null ? r : e.id,
                  );
          if (K != null) return [{ primitive: K, type: "primitive" }];
          var Q = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(l, "title"),
            ),
            X = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(l, "subtitle"),
            ),
            Y =
              o("WAWebHatchJsonReaders").readString(l, "type") === u
                ? null
                : o("WAWebHatchUrl").toWebUrl(
                    o("WAWebHatchJsonReaders").readString(
                      o("WAWebHatchJsonReaders").readObject(l, "data"),
                      "url",
                    ),
                  );
          return w(
            [Q != null && Y != null ? "[" + Q + "](" + Y + ")" : Q, X].filter(
              Boolean,
            ),
          );
        }
        return [];
      }
    }
    function D(e, t) {
      var n = o("WAWebHatchPeerInvite").parseHatchPairingLauncherAccept(e);
      return n == null
        ? x(e, t)
        : o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled()
          ? [
              {
                item: { card: n, isReadOnly: !1, type: "pairing_launcher" },
                type: "item",
              },
            ]
          : [];
    }
    function x(e, t) {
      var n = o("WAWebHatchJarvisWidgets").pairingLauncher(e);
      return n == null
        ? o("WAWebHatchJsonReaders").readString(e, "action") === c
          ? $(e, t)
          : []
        : o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled()
          ? o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled()
            ? [{ item: { card: n, type: "pairing_share" }, type: "item" }]
            : [{ text: s._(/*BTDS*/ "").toString(), type: "markdown" }]
          : [];
    }
    function $(e, t) {
      var n = A(
          o("WAWebHatchJsonReaders").readString(e, "title"),
          o("WAWebHatchJsonReaders").readString(e, "body"),
        ),
        r = n.length > 0 ? n : [t];
      return P(r.join("\n"));
    }
    function P(e) {
      var t = o(
        "WAWebHatchPeerInvitationLinkText",
      ).withoutHatchPeerInvitationLinks(e);
      return [
        { text: t !== "" ? t : s._(/*BTDS*/ "").toString(), type: "markdown" },
      ];
    }
    function N(e, t) {
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
    function M(e) {
      for (var t = [], n = 0; n < e.length; n += d)
        t.push({
          item: { media: e.slice(n, n + d), type: "media" },
          type: "item",
        });
      return t;
    }
    function w(e) {
      return e.length > 0 ? [{ text: e.join("\n"), type: "markdown" }] : [];
    }
    function A(e, t) {
      var n = o("WAWebHatchJarvisWidgets").text(e),
        r = o("WAWebHatchJarvisWidgets").text(t);
      return [].concat(
        n != null ? ["**" + n + "**"] : [],
        r != null ? [r] : [],
      );
    }
    function F(e) {
      return e.map(function (e, t) {
        return t + 1 + ". " + e;
      });
    }
    function O(e) {
      e: {
        var t = o("WAWebHatchJsonReaders").readString(e, "kind");
        if (t === "rich_place") {
          var n = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(e, "name"),
          );
          return n != null
            ? B("**" + n + "**", [
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
            ? B(r, [o("WAWebHatchJsonReaders").readString(e, "subtitle")])
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
          return B(l != null ? "[" + i + "](" + l + ")" : i, [
            (a = o("WAWebHatchJsonReaders").readString(e, "sale_price")) != null
              ? a
              : o("WAWebHatchJsonReaders").readString(e, "price"),
          ]);
        }
        return null;
      }
    }
    function B(e, t) {
      var n = t.map(o("WAWebHatchJarvisWidgets").text).filter(Boolean);
      return n.length > 0 ? "- " + e + ": " + n.join(" \xB7 ") : "- " + e;
    }
    function W(e) {
      var t = o("WAWebHatchJsonReaders").readObject(e, "button");
      return [].concat(
        t != null ? [t] : [],
        o("WAWebHatchJsonReaders").readObjects(e, "secondary_buttons"),
      );
    }
    function q(e) {
      var t = o("WAWebHatchJarvisWidgets").text(
        o("WAWebHatchJsonReaders").readString(e, "label"),
      );
      if (t == null) return null;
      var n = o("WAWebHatchUrl").toWebUrl(
        o("WAWebHatchJsonReaders").readString(e, "url"),
      );
      return n != null ? "[" + t + "](" + n + ")" : t;
    }
    function U(e) {
      var t;
      return (t = e.split("/").pop()) != null ? t : e;
    }
    function V(e, t, n) {
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
            w(A(e.title, e.subtitle)),
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
    function H(e) {
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
    ((l.buildHatchJarvisRender = g),
      (l.isHatchShoppingRenderable = h),
      (l.getHatchJarvisCodeLanguage = y));
  },
  226,
);
