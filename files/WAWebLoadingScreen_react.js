__d(
  "WAWebLoadingScreen.react",
  [
    "fbt",
    "$InternalEnum",
    "CometHeroHoldTrigger.react",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebHistorySyncUIText",
    "WAWebL10N",
    "WAWebProgressBar.react",
    "WDSIconIcLock.react",
    "cr:10212",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.memo,
      m = "x1w1lziz-B",
      p = {
        graphic: {
          marginTop: "x1cm6mvd",
          color: "xsq9etf",
          "::after_content": "x1s928wv",
          "::after_opacity": "xmf22ne",
          "::after_transition": "x1kcwo5r",
          "::after_transitionDelay": "xel2y37",
          $$css: !0,
        },
        shimmeringWWW: {
          "::after_position": "x1iofbvg",
          "::after_top": "x173lezl",
          "::after_insetInlineStart": "xftphsf",
          "::after_left": null,
          "::after_right": null,
          "::after_display": "xhkezso",
          "::after_width": "xlnv3q3",
          "::after_height": "x1wsn0xg",
          "::after_marginInlineEnd": "x1a300wp",
          "::after_backgroundImage": "x98f6rh",
          "::after_opacity": "x1rw2j67",
          "::after_animationName": "x1p7k6ia",
          "::after_animationDuration": "x1ui9q4k",
          "::after_animationTimingFunction": "x15y3wy1",
          "::after_animationDelay": "xb4mzpe",
          "::after_animationIterationCount": "x13ee8us",
          $$css: !0,
        },
        secondaryIcon: {
          display: "x1rg5ohu",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
        marginBottom2: { marginBottom: "x13m54ha", $$css: !0 },
      },
      _ = n("$InternalEnum").Mirrored([
        "INITIAL_LOAD",
        "CONNECTING",
        "DOWNLOADING",
        "ORGANIZING",
      ]),
      f = n("$InternalEnum").Mirrored([
        "MULTI_STAGE",
        "UNIFIED",
        "UNIFIED_WITH_PROGRESS",
        "LOGO",
      ]);
    function g(t) {
      "use no forget";
      var a = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(r("WAWebL10N"), "locale_change", a);
      var i = t.theme,
        l = i === void 0 ? f.MULTI_STAGE : i,
        u = t.stage === _.INITIAL_LOAD,
        d = t.stage === _.DOWNLOADING,
        m = t.stage === _.ORGANIZING,
        g = t.onLogout != null && !u && l !== f.LOGO,
        y = {
          0: "x10l6tqk x11eg80g x1ahifba x1escl5o x1hc1fzr",
          2: "x10l6tqk x11eg80g x1escl5o x1hc1fzr x5epzj0",
          1: "x10l6tqk x11eg80g x1ahifba x1escl5o x1hc1fzr x1rcz4em",
          3: "x10l6tqk x11eg80g x1escl5o x1hc1fzr x5epzj0 x1rcz4em",
        }[(!!d << 1) | (!!d << 0)],
        C = {
          0: "x10l6tqk x11eg80g x1ahifba x1kuhel0 xh8yej3 x1f6kntn x40yjcy x2b8uid xg01cxk",
          2: "x10l6tqk x11eg80g x1kuhel0 xh8yej3 x1f6kntn x40yjcy x2b8uid x1hc1fzr x5epzj0",
          1: "x10l6tqk x11eg80g x1ahifba x1kuhel0 xh8yej3 x1f6kntn x40yjcy x2b8uid xg01cxk x1lrmtmu",
          3: "x10l6tqk x11eg80g x1kuhel0 xh8yej3 x1f6kntn x40yjcy x2b8uid x1hc1fzr x5epzj0 x1lrmtmu",
        }[(!!d << 1) | (!!d << 0)],
        b;
      switch (l) {
        case f.MULTI_STAGE:
          switch (t.stage) {
            case _.INITIAL_LOAD:
              b = r("WAWebFbtCommon")("WhatsApp");
              break;
            case _.CONNECTING:
              b = s._(/*BTDS*/ "Connecting\u2026");
              break;
            case _.DOWNLOADING:
              b = s._(/*BTDS*/ "Downloading messages: {progress}\u0025", [
                s._param("progress", t.progress),
              ]);
              break;
            case _.ORGANIZING:
              b = s._(/*BTDS*/ "Organizing messages");
              break;
          }
          break;
        case f.UNIFIED:
          b = o("WAWebHistorySyncUIText").SYNC_LOADING();
          break;
        case f.UNIFIED_WITH_PROGRESS:
          switch (t.stage) {
            case _.INITIAL_LOAD:
            case _.CONNECTING:
              b = o("WAWebHistorySyncUIText").SYNC_LOADING();
              break;
            case _.DOWNLOADING:
            case _.ORGANIZING:
              b = s._(
                /*BTDS*/ '_j{"*":"Loading your chats [{percentage}\\u0025]"}',
                [s._param("percentage", t.progress, [0])],
              );
          }
          break;
        case f.LOGO:
          b = r("WAWebFbtCommon")("WhatsApp");
          break;
      }
      var v = [p.graphic];
      return (
        (l === f.LOGO || (l === f.MULTI_STAGE && (u || m))) &&
          v.push(p.shimmeringWWW),
        c.jsxs("div", {
          "data-testid": void 0,
          className:
            "x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d x87ps6o x6egj2d",
          children: [
            c.jsx(r("CometHeroHoldTrigger.react"), {
              description: "WAWebLoadingScreen_" + String(t.stage),
              hold: !0,
            }),
            c.jsx(
              "div",
              babelHelpers.extends({}, (e || (e = r("stylex"))).props(v), {
                children: c.jsx(h, {}),
              }),
            ),
            c.jsx("div", {
              className: "x1c3i2sq x14ug900 xk82a7y x1nmyh1g",
              children: b,
            }),
            c.jsx("div", {
              className:
                "x1n2onr6 x1oysuqx xqu0tyb xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 xk82a7y xevwqry",
              children: c.jsx(r("WAWebProgressBar.react"), {
                value: t.progress,
                max: 100,
              }),
            }),
            c.jsxs("div", {
              className: "x1f6kntn xhslqc4 xk82a7y x1ci5j9l",
              children: [
                c.jsx(r("WDSIconIcLock.react"), {
                  height: 17,
                  xstyle: [p.secondaryIcon, p.marginBottom2],
                }),
                "\xA0",
                r("WAWebFbtCommon")("End-to-end encrypted"),
              ],
            }),
            n("cr:10212") && !u
              ? c.jsx("div", {
                  className: "x10l6tqk x11eg80g x1ahifba x1w4j1z7",
                  children: c.jsx(n("cr:10212"), {}),
                })
              : null,
            g &&
              c.jsx("div", {
                className: y,
                children: c.jsx(o("WAWebButton.react").WAWebButtonOnAccent, {
                  onClick: t.onLogout,
                  children: s._(/*BTDS*/ "Log out"),
                }),
              }),
            c.jsx("div", {
              className: C,
              children: s._(
                /*BTDS*/ "Don't close this window. Your messages are downloading.",
              ),
            }),
          ],
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return c.jsx("span", {
        children: c.jsx("svg", {
          width: "250px",
          height: "52px",
          viewBox: "0 0 250 52",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          children: c.jsx("path", {
            className: "xw7t59x",
            d: "M37.7314595,31.1612046 C37.0876293,30.8391042 33.9223475,29.2816062 33.332139,29.0666255 C32.7419305,28.8517683 32.3127104,28.7444016 31.8834903,29.3887258 C31.4542703,30.0332973 30.2204788,31.4835521 29.8447567,31.91339 C29.4692818,32.3428571 29.0936834,32.3968494 28.4499768,32.0745019 C27.8060232,31.7521544 25.7314595,31.0723707 23.272278,28.8787027 C21.3582085,27.171583 20.0661004,25.0632896 19.6905019,24.4185946 C19.315027,23.7741467 19.6505946,23.4257297 19.9729421,23.1046178 C20.2625483,22.8161235 20.6167722,22.352556 20.9386255,21.9767104 C21.2606023,21.6007413 21.3678456,21.3320154 21.5824556,20.9026718 C21.7970657,20.472834 21.6898224,20.0968649 21.528834,19.7746409 C21.3678456,19.452417 20.0801853,16.2831815 19.543722,14.993915 C19.0210965,13.7387491 18.4903166,13.9087567 18.0950733,13.8887413 C17.7199691,13.870085 17.2902548,13.8661313 16.8611583,13.8661313 C16.4319382,13.8661313 15.7343629,14.0272433 15.144278,14.6716911 C14.5540695,15.3163861 12.8908108,16.8740077 12.8908108,20.0429961 C12.8908108,23.2121081 15.1978996,26.2734826 15.5198765,26.7031969 C15.8417297,27.1330348 20.0597992,33.6360772 26.5184865,36.4250193 C28.05461,37.0883707 29.2539305,37.4846023 30.1888494,37.7811274 C31.7312742,38.2713822 33.1348263,38.2021931 34.2440772,38.0363861 C35.4810811,37.8515521 38.0533127,36.478888 38.5898996,34.9750116 C39.1263629,33.470888 39.1263629,32.1818687 38.9653745,31.91339 C38.8045097,31.6447876 38.3752896,31.4835521 37.7314595,31.1612046 M25.9838765,47.2013591 L25.9752278,47.2013591 C22.1322625,47.1998763 18.3629343,46.1674749 15.0745946,44.2160926 L14.2926332,43.7519074 L6.18674906,45.8782394 L8.35027028,37.9751042 L7.84111198,37.1648494 C5.69723552,33.7549343 4.56500386,29.8139923 4.56660833,25.767166 C4.57130502,13.9587954 14.1789652,4.35187645 25.9924016,4.35187645 C31.7128649,4.35385328 37.0902239,6.58458689 41.1338378,10.6327722 C45.1773282,14.680834 47.4028724,20.0618996 47.4007737,25.7843398 C47.3959539,37.5936988 37.7882934,47.2013591 25.9838765,47.2013591 M44.2112742,7.556695 C39.3464092,2.68614672 32.8767258,0.00271814672 25.9836293,0 C11.7809421,0 0.221652509,11.5584247 0.215969112,25.7654363 C0.21411583,30.3069652 1.40058687,34.7397683 3.65553668,38.6475984 L-4.61852778e-14,52 L13.6596757,48.4167413 C17.4233205,50.4695597 21.6607876,51.5516293 25.9733745,51.5531121 L25.9838765,51.5531121 L25.984,51.5531121 C40.1852046,51.5531121 51.7456062,39.9934517 51.7512912,25.7860695 C51.7538842,18.9011274 49.0761392,12.4271197 44.2112742,7.556695",
            fill: "currentColor",
          }),
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = d(g);
    ((l.Stage = _), (l.LoadingScreenTheme = f), (l.LoadingScreen = y));
  },
  226,
);
