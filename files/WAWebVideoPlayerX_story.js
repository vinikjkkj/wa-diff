__d(
  "WAWebVideoPlayerX.story",
  [
    "WAWebVideoPlayerSurface.react",
    "WAWebVideoPlayerX.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        storyName: "WAWebVideoPlayerX",
        component: r("WAWebVideoPlayerX.react"),
        description:
          "The WhatsApp Web wrapper around the Comet Video Player. With no manifest the player plays progressively. Given a DASH manifest it attempts adaptive playback.",
        examples: [
          {
            example: function () {
              return s.jsx(d, {});
            },
            title: "Progressive baseline",
            description:
              "No manifest, so this is the path every video in the product takes today. Paste a progressive video URL to play one.",
          },
          {
            example: function () {
              return s.jsx(m, {});
            },
            title: "DASH from a pasted manifest",
            description:
              "Paste an MPD document to hand the player a DASH manifest. Each new manifest remounts the player. DASH is also gated on the WA GK wa_web_dash_eligible_browsers, which excludes Safari, so on an ineligible browser the player falls back to progressive however good the manifest is. Fill the fallback URL as well to see that, and to keep a rejected manifest from leaving the player with nothing to play: with no source at all the player throws out of render and the showroom error boundary blanks both examples until the page is reloaded.",
          },
        ],
      };
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t = u(""),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s.jsxs("label", {
            children: [
              "Progressive video URL",
              s.jsx("input", {
                "data-testid": "video_player_story_progressive_src_input",
                onBlur: function (t) {
                  return a(t.currentTarget.value);
                },
                size: 80,
                type: "text",
              }),
            ],
          })),
          (e[0] = i))
        : (i = e[0]);
      var l;
      return (
        e[1] !== n
          ? ((l = s.jsxs("div", {
              "data-testid": "video_player_story_progressive_example",
              children: [
                i,
                n === ""
                  ? s.jsx("div", {
                      "data-testid": "video_player_story_progressive_hint",
                      children:
                        "Paste a progressive video URL, then click outside the field to render the player.",
                    })
                  : s.jsx(
                      "div",
                      {
                        className: "xc6p2dh x1n2onr6 xht4xr3",
                        "data-testid": "video_player_story_progressive_player",
                        children: s.jsx(r("WAWebVideoPlayerX.react"), {
                          autoplayEnabled: !0,
                          src: n,
                          children: s.jsx(
                            r("WAWebVideoPlayerSurface.react"),
                            {},
                          ),
                        }),
                      },
                      n,
                    ),
              ],
            })),
            (e[1] = n),
            (e[2] = l))
          : (l = e[2]),
        l
      );
    }
    function m() {
      var e = o("react-compiler-runtime").c(5),
        t = u(""),
        n = t[0],
        a = t[1],
        i = u(""),
        l = i[0],
        c = i[1],
        d;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s.jsxs("label", {
            children: [
              "DASH manifest (MPD)",
              s.jsx("textarea", {
                cols: 80,
                "data-testid": "video_player_story_dash_manifest_input",
                onBlur: function (t) {
                  return a(t.currentTarget.value);
                },
                rows: 8,
              }),
            ],
          })),
          (e[0] = d))
        : (d = e[0]);
      var m;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s.jsxs("label", {
            children: [
              "Progressive fallback URL (optional)",
              s.jsx("input", {
                "data-testid": "video_player_story_dash_fallback_src_input",
                onBlur: function (t) {
                  return c(t.currentTarget.value);
                },
                size: 80,
                type: "text",
              }),
            ],
          })),
          (e[1] = m))
        : (m = e[1]);
      var p;
      return (
        e[2] !== l || e[3] !== n
          ? ((p = s.jsxs("div", {
              "data-testid": "video_player_story_dash_example",
              children: [
                d,
                m,
                n === ""
                  ? s.jsx("div", {
                      "data-testid": "video_player_story_dash_hint",
                      children:
                        "Paste an MPD document, then click outside the field to render the player.",
                    })
                  : s.jsx(
                      "div",
                      {
                        className: "xc6p2dh x1n2onr6 xht4xr3",
                        "data-testid": "video_player_story_dash_player",
                        children: s.jsx(r("WAWebVideoPlayerX.react"), {
                          autoplayEnabled: !0,
                          dashManifestXml: n,
                          src: l === "" ? null : l,
                          children: s.jsx(
                            r("WAWebVideoPlayerSurface.react"),
                            {},
                          ),
                        }),
                      },
                      n + "|" + l,
                    ),
              ],
            })),
            (e[2] = l),
            (e[3] = n),
            (e[4] = p))
          : (p = e[4]),
        p
      );
    }
    var p = c;
    l.default = p;
  },
  98,
);
