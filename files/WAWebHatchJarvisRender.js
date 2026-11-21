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
        a = o != null ? I(o, t.displayText, t.fileMetadata, t.messageId) : [],
        i = [].concat(
          a.length > 0 ? a : y(t.displayText, t.fileMetadata),
          t.inlineWidgets.flatMap(k),
          V(t.citations),
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
              _ = S(p, r == null ? void 0 : r.codeTexts);
            if (_ != null) s.push(_);
            else {
              var f = "" + e + l.size;
              (l.set(f, L(p, r)), s.push(R(f)));
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
    function h(e) {
      return e != null ? f.get(e.toLowerCase()) : null;
    }
    function y(e, t) {
      var n = [],
        r = [],
        a = [],
        i = !1,
        l = function () {
          var e = r.join("\n").trim();
          (e !== "" && n.push({ text: e, type: "markdown" }), (r = []));
        },
        s = function () {
          (n.push.apply(n, N(a)), (a = []));
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
              p = C(d, (m = t.get(d.url)) != null ? m : null);
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
    function C(e, t) {
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
    function b(e) {
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
    function S(e, t) {
      if (e.type !== "file") return null;
      var n = h(e.fileExtension),
        r = t == null ? void 0 : t.get(e.embedUrl);
      return n == null || r == null
        ? null
        : v({
            __typename: "GenAICodeUXPrimitive",
            code_blocks: [
              { __typename: "GenAICodeBlockData", content: r, type: "DEFAULT" },
            ],
            language: n,
          });
    }
    function R(e) {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: { __typename: "GenAIFilePrimitive", title: e, url: e },
        },
      };
    }
    function L(e, t) {
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
                list: babelHelpers.extends({}, o, { rows: o.rows.map(E) }),
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
    function E(e) {
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
    function k(e) {
      if (e.kind !== "option") return [];
      var t = P(e.data, e.id);
      return t != null ? [{ item: t, type: "item" }] : [];
    }
    function I(e, t, n, r) {
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
            ? U(l, e.id, n)
            : M(
                w(
                  o("WAWebHatchJsonReaders").readString(a, "title"),
                  o("WAWebHatchJsonReaders").readString(a, "subtitle"),
                ),
              );
        }
        if (e.kind === "browser_task") {
          var s = o("WAWebHatchJarvisWidgets").browserTask(a);
          return s != null ? [{ primitive: s, type: "primitive" }] : [];
        }
        if (e.kind === "option") {
          var c = P(a, e.id);
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
            var y = g != null ? g : f != null ? q(f) : null;
            y != null && p.push(y);
          }
          return [].concat(N(m), M(A(p)));
        }
        if (e.kind === "voice_options")
          return M(
            A(
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
          return M(
            w(
              o("WAWebHatchJsonReaders").readString(a, "title"),
              o("WAWebHatchJsonReaders").readString(a, "subtitle"),
            ),
          );
        if (e.kind === "navigation")
          return M(
            w(
              o("WAWebHatchJsonReaders").readString(a, "title"),
              o("WAWebHatchJsonReaders").readString(a, "summary"),
            ),
          );
        if (e.kind === "idea_group") {
          var b = o("WAWebHatchJsonReaders").readObject(a, "navigation");
          return M(
            w(
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
          return M(
            [].concat(
              S != null ? [S] : [],
              o("WAWebHatchJsonReaders")
                .readObjects(v, "elements")
                .map(F)
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
            k = M(L != null ? [L] : []);
          if (
            E == null ||
            !E.startsWith(o("WAWebHatchJarvisText").HATCH_JARVIS_SANDBOX_PREFIX)
          )
            return k;
          var I = C({ label: "", url: E }, (R = n.get(E)) != null ? R : null);
          return I.type === "file"
            ? [].concat(k, [{ item: I, type: "item" }])
            : k;
        }
        if (e.kind === "space_build_completed") {
          var D = o("WAWebHatchJarvisWidgets").spaceCard(a);
          return D != null
            ? [{ primitive: D, type: "primitive" }]
            : M(
                w(
                  o("WAWebHatchJsonReaders").readString(a, "display_name"),
                  o("WAWebHatchJsonReaders").readString(a, "summary"),
                ),
              );
        }
        if (e.kind === "external_link") {
          var x = o("WAWebHatchJarvisWidgets").linkCard(a, t);
          return x != null
            ? [
                {
                  item: { card: x, fileMetadata: n, type: "link_card" },
                  type: "item",
                },
              ]
            : [];
        }
        if (e.kind === "text_with_button") {
          var $ = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "text"),
            ),
            O = o("WAWebHatchJarvisWidgets").actionButtons(B(a));
          return [].concat(
            M($ != null ? [$] : []),
            O.length > 0
              ? [{ item: { buttons: O, type: "buttons" }, type: "item" }]
              : [],
          );
        }
        if (e.kind === "pairing_launcher") return T(a, t);
        if (e.kind === "complimentary_subscription") {
          var V = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(a, "text"),
          );
          return M(
            [].concat(V != null ? [V] : [], B(a).map(W).filter(Boolean)),
          );
        }
        if (e.kind === "internal_link_action_card") {
          var H,
            G =
              (H = o("WAWebHatchJarvisWidgets").connectorCard(a, e.id)) != null
                ? H
                : o("WAWebHatchJarvisWidgets").secureCredential(
                    a,
                    r != null ? r : e.id,
                  );
          if (G != null) return [{ primitive: G, type: "primitive" }];
          var z = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "title"),
            ),
            j = o("WAWebHatchJarvisWidgets").text(
              o("WAWebHatchJsonReaders").readString(a, "subtitle"),
            ),
            K =
              o("WAWebHatchJsonReaders").readString(a, "type") === u
                ? null
                : o("WAWebHatchUrl").toWebUrl(
                    o("WAWebHatchJsonReaders").readString(
                      o("WAWebHatchJsonReaders").readObject(a, "data"),
                      "url",
                    ),
                  );
          return M(
            [z != null && K != null ? "[" + z + "](" + K + ")" : z, j].filter(
              Boolean,
            ),
          );
        }
        return [];
      }
    }
    function T(e, t) {
      var n = o("WAWebHatchPeerInvite").parseHatchPairingLauncherAccept(e);
      return n == null
        ? D(e, t)
        : o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled()
          ? [
              {
                item: { card: n, isReadOnly: !1, type: "pairing_launcher" },
                type: "item",
              },
            ]
          : [];
    }
    function D(e, t) {
      var n = o("WAWebHatchJarvisWidgets").pairingLauncher(e);
      return n == null
        ? o("WAWebHatchJsonReaders").readString(e, "action") === c
          ? x(e, t)
          : []
        : o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled()
          ? o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled()
            ? [{ item: { card: n, type: "pairing_share" }, type: "item" }]
            : $(w(n.title, n.body).join("\n"))
          : [];
    }
    function x(e, t) {
      var n = w(
          o("WAWebHatchJsonReaders").readString(e, "title"),
          o("WAWebHatchJsonReaders").readString(e, "body"),
        ),
        r = n.length > 0 ? n : [t];
      return $(r.join("\n"));
    }
    function $(e) {
      var t = o(
        "WAWebHatchPeerInvitationLinkText",
      ).withoutHatchPeerInvitationLinks(e);
      return [
        {
          text: t !== "" ? t : s._(/*BTDS*/ "Pairing invitation").toString(),
          type: "markdown",
        },
      ];
    }
    function P(e, t) {
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
    function N(e) {
      for (var t = [], n = 0; n < e.length; n += d)
        t.push({
          item: { media: e.slice(n, n + d), type: "media" },
          type: "item",
        });
      return t;
    }
    function M(e) {
      return e.length > 0 ? [{ text: e.join("\n"), type: "markdown" }] : [];
    }
    function w(e, t) {
      var n = o("WAWebHatchJarvisWidgets").text(e),
        r = o("WAWebHatchJarvisWidgets").text(t);
      return [].concat(
        n != null ? ["**" + n + "**"] : [],
        r != null ? [r] : [],
      );
    }
    function A(e) {
      return e.map(function (e, t) {
        return t + 1 + ". " + e;
      });
    }
    function F(e) {
      e: {
        var t = o("WAWebHatchJsonReaders").readString(e, "kind");
        if (t === "rich_place") {
          var n = o("WAWebHatchJarvisWidgets").text(
            o("WAWebHatchJsonReaders").readString(e, "name"),
          );
          return n != null
            ? O("**" + n + "**", [
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
            ? O(r, [o("WAWebHatchJsonReaders").readString(e, "subtitle")])
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
          return O(l != null ? "[" + i + "](" + l + ")" : i, [
            (a = o("WAWebHatchJsonReaders").readString(e, "sale_price")) != null
              ? a
              : o("WAWebHatchJsonReaders").readString(e, "price"),
          ]);
        }
        return null;
      }
    }
    function O(e, t) {
      var n = t.map(o("WAWebHatchJarvisWidgets").text).filter(Boolean);
      return n.length > 0 ? "- " + e + ": " + n.join(" \xB7 ") : "- " + e;
    }
    function B(e) {
      var t = o("WAWebHatchJsonReaders").readObject(e, "button");
      return [].concat(
        t != null ? [t] : [],
        o("WAWebHatchJsonReaders").readObjects(e, "secondary_buttons"),
      );
    }
    function W(e) {
      var t = o("WAWebHatchJarvisWidgets").text(
        o("WAWebHatchJsonReaders").readString(e, "label"),
      );
      if (t == null) return null;
      var n = o("WAWebHatchUrl").toWebUrl(
        o("WAWebHatchJsonReaders").readString(e, "url"),
      );
      return n != null ? "[" + t + "](" + n + ")" : t;
    }
    function q(e) {
      var t;
      return (t = e.split("/").pop()) != null ? t : e;
    }
    function U(e, t, n) {
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
            M(w(e.title, e.subtitle)),
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
    function V(e) {
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
    ((l.buildHatchJarvisRender = g), (l.getHatchJarvisCodeLanguage = h));
  },
  226,
);
