__d(
  "WAWebTransitions",
  ["velocity-animate"],
  function (t, n, r, o, a, i, l) {
    var e = [0.1, 0.82, 0.25, 1],
      s = [0.69, 0, 0.79, 0.14],
      u = [0.84, 0.07, 0.93, 0.46];
    function c() {
      (r("velocity-animate").RegisterEffect("attach.Up", {
        defaultDuration: 300,
        calls: [
          [
            {
              opacity: [1, 0],
              translateY: ["0%", "150%"],
              scaleX: [1, 0.3],
              scaleY: [1, 0.3],
            },
            1,
            { easing: [300, 22] },
          ],
        ],
      }),
        r("velocity-animate").RegisterEffect("attach.Down", {
          defaultDuration: 200,
          easing: s,
          calls: [
            [
              {
                opacity: [0, 1],
                translateY: ["100%", "0%"],
                scaleX: [0.3, 1],
                scaleY: [0.3, 1],
              },
              1,
              { easing: [0.33, 0, 0.39, 0.91] },
            ],
          ],
        }),
        r("velocity-animate").RegisterEffect("dropdown.Down", {
          defaultDuration: 200,
          easing: e,
          calls: [
            [
              { opacity: [1, 0], translateY: ["0%", "-15px"] },
              1,
              { easing: e },
            ],
          ],
        }));
    }
    var d = {
        pop: {
          duration: 200,
          easing: u,
          enter: {
            props: { scaleX: [1, 0.5], scaleY: [1, 0.5], opacity: [1, 0] },
          },
          leave: {
            props: { scaleX: [0.5, 1], scaleY: [0.5, 1], opacity: [0, 1] },
          },
        },
        slide: {
          duration: 200,
          easing: e,
          enter: { props: "slideDown" },
          leave: { props: "slideUp" },
        },
        scale: {
          duration: 500,
          easing: e,
          enter: { props: { scaleX: [1, 0], scaleY: [1, 0] } },
          leave: { props: { scaleX: [0, 1], scaleY: [0, 1] } },
        },
        fade: {
          duration: 200,
          easing: e,
          enter: { props: { opacity: [1, 0] } },
          leave: { props: { opacity: [0, 1] } },
        },
        messageComposer: {
          duration: 300,
          easing: "easeInOut",
          enter: { props: { opacity: [1, 0], translateX: [0, -100] } },
          leave: { props: { opacity: [0, 1], translateX: [-100, 0] } },
        },
        pttComposer: {
          duration: 300,
          easing: "easeInOut",
          enter: { props: { opacity: [1, 0] } },
          leave: { props: { opacity: [0, 1] } },
        },
        "fade-fast": {
          easing: "ease",
          enter: { props: { opacity: [1, 0] }, duration: 150 },
          leave: { props: { opacity: [0, 1] }, duration: 100 },
        },
        "ptt-out-of-chat": {
          enter: {
            props: { translateY: ["-100%", "0%"], opacity: [1, 0] },
            duration: 250,
            delay: 150,
            easing: "ease",
          },
          leave: {
            props: { translateY: ["0%", "-100%"], opacity: [0, 1] },
            duration: 250,
            delay: 150,
            easing: "ease",
          },
        },
        fade_sifo: {
          enter: { props: { opacity: [1, 0] }, duration: 250 },
          leave: { props: { opacity: [0, 1] }, duration: 100 },
        },
        capture: {
          enter: { props: { opacity: [1, 0] }, duration: 350 },
          leave: [
            {
              selector: "[data-animate-capture-snapshot]",
              props: "transition.bounceDownOut",
              duration: 700,
            },
          ],
        },
        butterbar: {
          enter: { props: "slideDown", easing: e, duration: 700 },
          leave: { props: "slideUp", easing: s, duration: 350 },
        },
        modal: {
          enter: [
            {
              selector: "[data-animate-modal-backdrop]",
              props: { opacity: [1, 0] },
              duration: 300,
              easing: [0.19, 0.73, 0.28, 1],
            },
            {
              selector: "[data-animate-modal-popup]",
              props: { scaleX: [1, 0], scaleY: [1, 0], opacity: [1, 0] },
              easing: [0.19, 0.73, 0.28, 1],
              delay: 180,
              duration: 200,
            },
            {
              selector: "[data-animate-modal-popup]",
              props: { opacity: [0, 0] },
              duration: 180,
            },
          ],
          leave: [
            {
              selector: "[data-animate-modal-backdrop]",
              props: { opacity: [0, 1] },
              duration: 300,
              easing: s,
              delay: 100,
            },
            {
              selector: "[data-animate-modal-popup]",
              props: { scaleX: [0, 1], scaleY: [0, 1] },
              easing: s,
              duration: 200,
            },
          ],
        },
        "modal-flow": {
          enter: [
            {
              selector: "[data-animate-modal-backdrop]",
              props: { opacity: [1, 0] },
              duration: 300,
              easing: [0.19, 0.73, 0.28, 1],
            },
            {
              selector: "[data-animate-modal-popup]",
              props: { scaleX: [1, 0], scaleY: [1, 0], opacity: [1, 1] },
              easing: [0.19, 0.73, 0.28, 1],
              delay: 180,
              duration: 200,
            },
            {
              selector: "[data-animate-modal-popup]",
              props: { opacity: [0, 0] },
              duration: 180,
            },
          ],
          leave: [
            {
              selector: "[data-animate-modal-backdrop]",
              props: { opacity: [0, 1] },
              duration: 300,
              easing: s,
              delay: 100,
            },
            {
              selector: "[data-animate-modal-popup]",
              props: { scaleX: [0, 1], scaleY: [0, 1] },
              easing: s,
              duration: 200,
            },
          ],
        },
        "flow-transition-modal-push": {
          duration: 300,
          easing: e,
          enter: { props: { opacity: [1, 0] } },
          leave: { props: { opacity: [0, 1] } },
        },
        "flow-transition-modal-pop": {
          duration: 300,
          easing: e,
          enter: { props: { opacity: [1, 0] } },
          leave: { props: { opacity: [0, 1] } },
        },
        "flow-transition-box-size-drawer-push": {
          duration: 300,
          easing: e,
          enter: [
            {
              selector: "[data-animate-modal-body]",
              props: { translateX: ["0%", "100%"] },
            },
          ],
          leave: [
            { props: { background: ["transparent", "transparent"] } },
            {
              selector: "[data-animate-modal-popup]",
              props: {
                background: ["transparent", "transparent"],
                boxShadow: ["none", "none"],
              },
            },
            {
              selector: "[data-animate-modal-body]",
              props: { translateX: ["-100%", "0%"] },
            },
          ],
        },
        "flow-transition-box-size-drawer-pop": {
          duration: 300,
          easing: e,
          enter: [
            {
              selector: "[data-animate-modal-body]",
              props: { translateX: ["0%", "-100%"] },
            },
          ],
          leave: [
            { props: { background: ["transparent", "transparent"] } },
            {
              selector: "[data-animate-modal-popup]",
              props: {
                background: ["transparent", "transparent"],
                boxShadow: ["none", "none"],
              },
            },
            {
              selector: "[data-animate-modal-body]",
              props: { translateX: ["100%", "0%"] },
            },
          ],
        },
        "flow-transition-drawer-push": {
          duration: 300,
          easing: e,
          enter: { props: { translateX: ["0%", "100%"] } },
          leave: { props: { translateX: ["-100%", "0%"] } },
        },
        "flow-transition-drawer-pop": {
          duration: 300,
          easing: e,
          enter: { props: { translateX: ["0%", "-100%"] } },
          leave: { props: { translateX: ["100%", "0%"] } },
        },
        "drawer-left": {
          duration: 300,
          easing: e,
          enter: [
            { props: { translateX: ["0%", "-100%"] } },
            {
              selector: "[data-animate-drawer-title]",
              props: { translateX: [0, -50], opacity: [1, 0] },
              duration: 500,
              easing: "easeOut",
            },
          ],
          leave: { props: { translateX: ["-100%", "0%"] } },
        },
        "drawer-left-rtl": {
          duration: 300,
          easing: e,
          enter: [
            { props: { translateX: ["0%", "100%"] } },
            {
              selector: "[data-animate-drawer-title]",
              props: { translateX: [0, 50], opacity: [1, 0] },
              duration: 500,
              easing: "easeOut",
            },
          ],
          leave: { props: { translateX: ["100%", "0%"] } },
        },
        dropdown: {
          duration: 300,
          easing: e,
          enter: [
            {
              selector: "[data-animate-dropdown-item]",
              props: "dropdown.Down",
              delay: 50,
              duration: 375,
              stagger: 25,
              drag: !0,
            },
            { props: { scale: [1, 0] } },
            { props: { opacity: [1, 0] }, duration: 100 },
          ],
          leave: { props: { scaleX: [0, 1], scaleY: [0, 1], opacity: [0, 1] } },
        },
        "dropdown-picker": {
          duration: 300,
          easing: e,
          enter: [
            {
              selector: "[data-animate-dropdown-item]",
              props: { opacity: [1, 0] },
              delay: 50,
              duration: 200,
            },
            {
              selector: "[data-animate-dropdown-nib]",
              props: {
                opacity: [1, 0],
                rotateZ: ["45deg"],
                translateY: ["0%", "-100%"],
              },
            },
            { props: { scale: [1, 0] } },
            { props: { opacity: [1, 0] }, duration: 100 },
          ],
          leave: [
            {
              selector: "[data-animate-dropdown-item]",
              props: { opacity: [1, 0] },
              duration: 100,
            },
            {
              selector: "[data-animate-dropdown-nib]",
              props: { opacity: [1, 0] },
              duration: 150,
            },
            { props: { scaleX: [0, 1], scaleY: [0, 1], opacity: [0, 1] } },
          ],
        },
        "profile-viewer": {
          duration: 500,
          easing: [0.1, 1.03, 0.28, 0.99],
          leave: { delay: 400, props: { opacity: [0, 1] } },
        },
        "media-viewer": {
          duration: 300,
          easing: [0.1, 1.03, 0.28, 0.99],
          leave: {
            selector: "[data-animate-media-viewer]",
            props: { opacity: [0, 1] },
          },
        },
        "status-quoted-msg": {
          enter: {
            props: { translateY: ["0%", "100%"], opacity: [1, 0] },
            duration: 200,
            easing: e,
          },
          leave: {
            props: { translateY: ["100%", "0%"], opacity: [0, 1] },
            duration: 200,
            easing: s,
          },
        },
        "status-quick-reply": {
          enter: { props: { opacity: [1, 0] }, duration: 300, easing: e },
          leave: { props: { opacity: [0, 1] }, duration: 200, easing: s },
        },
        "status-panel": {
          enter: {
            props: { translateY: ["0%", "100%"], opacity: [1, 0] },
            duration: 300,
            easing: e,
          },
          leave: {
            props: { translateY: ["100%", "0%"], opacity: [0, 1] },
            duration: 200,
            easing: s,
          },
        },
        "status-modal": {
          easing: [0.55, 0.085, 0.68, 0.53],
          enter: {
            duration: 100,
            selector: "[data-animate-status-modal-background]",
            props: { opacity: [1, 0] },
          },
          leave: {
            duration: 100,
            selector: "[data-animate-status-modal-background]",
            props: { opacity: [0, 1] },
          },
        },
        "quoted-status-modal": {
          easing: [0.55, 0.085, 0.68, 0.53],
          enter: {
            duration: 100,
            selector: "[data-animate-status-viewer]",
            props: { opacity: [1, 0] },
          },
          leave: {
            duration: 100,
            selector: "[data-animate-status-viewer]",
            props: { opacity: [0, 1] },
          },
        },
        "status-player": {
          easing: [0.55, 0.085, 0.68, 0.53],
          enter: { duration: 200, props: { opacity: [1, 0] } },
          leave: { duration: 200, props: { opacity: [0, 1] } },
        },
        "status-media-loading": {
          duration: 300,
          easing: s,
          leave: { props: { opacity: [0, 1] } },
        },
        menu: {
          enter: {
            selector: "[data-animate-menu-icons-item]",
            props: "attach.Up",
            duration: 700,
            stagger: 30,
            drag: !1,
          },
          leave: {
            selector: "[data-animate-menu-icons-item]",
            props: "attach.Down",
            duration: 200,
            stagger: 30,
          },
        },
        "slide-left": {
          duration: 300,
          easing: e,
          enter: { props: { translateX: ["0%", "100%"] } },
          leave: { props: { translateX: ["100%", "0%"] } },
        },
        "slide-left-rtl": {
          duration: 300,
          easing: e,
          enter: { props: { translateX: ["0%", "-100%"] } },
          leave: { props: { translateX: ["-100%", "0%"] } },
        },
        "slide-forward": {
          duration: 200,
          easing: [0.19, 0.93, 0.18, 0.99],
          enter: { props: { translateX: ["0%", "100%"] } },
          leave: { props: { translateX: ["-100%", "0%"] } },
        },
        "slide-back": {
          duration: 200,
          easing: [0.19, 0.93, 0.18, 0.99],
          enter: { props: { translateX: ["0%", "-100%"] } },
          leave: { props: { translateX: ["100%", "0%"] } },
        },
        "slide-down-date": {
          duration: 300,
          enter: {
            props: { translateY: ["0%", "-130%"], opacity: [1, 0] },
            easing: e,
          },
          leave: {
            props: { translateY: ["-130%", "0%"], opacity: [0, 1] },
            easing: s,
          },
        },
        "pop-fast-reverse": {
          duration: 75,
          easing: [0.14, 0.62, 0.33, 0.9],
          enter: [
            {
              selector: "[data-js-context-icon]",
              props: { translateX: ["0%", "-100%"] },
            },
            { props: { opacity: [1, 0.5] } },
          ],
          leave: [
            {
              selector: "[data-js-context-icon]",
              props: { translateX: ["-100%", "0%"] },
            },
            { props: { opacity: [0, 1] } },
          ],
        },
        "pop-fast": {
          duration: 75,
          easing: [0.14, 0.62, 0.33, 0.9],
          enter: [
            {
              selector: "[data-js-context-icon]",
              props: { translateX: ["0%", "100%"] },
            },
            { props: { opacity: [1, 0.5] } },
          ],
          leave: [
            {
              selector: "[data-js-context-icon]",
              props: { translateX: ["100%", "0%"] },
            },
            { props: { opacity: [0, 1] } },
          ],
        },
        "pop-fast-chat": {
          duration: 75,
          easing: [0.14, 0.62, 0.33, 0.9],
          enter: [{ props: { width: ["20px", "5px"], opacity: [1, 0.5] } }],
          leave: [{ props: { width: ["5px", "20px"], opacity: [0, 1] } }],
        },
        "toast-transition": {
          duration: 300,
          easing: e,
          cleanOnComplete: !0,
          enter: { props: { translateY: ["0%", "100%"], opacity: [1, 0] } },
          leave: { props: { opacity: [0, 1] } },
        },
        "slide-up-down": {
          duration: 300,
          easing: e,
          enter: { props: { translateY: ["0%", "100%"] } },
          leave: { props: { translateY: ["100%", "0%"] } },
        },
        "slide-up-down-footer": {
          duration: 200,
          easing: e,
          enter: [
            { props: { translateY: ["0%", "100%"] } },
            {
              selector: "[data-animate-btn]",
              props: { opacity: [1, 0], scale: [1, 0] },
              delay: 200,
              duration: 300,
            },
          ],
          leave: [
            { props: { translateY: ["100%", "0%"] }, delay: 200 },
            {
              selector: "[data-animate-btn]",
              props: { opacity: [0, 1], scale: [0.6, 1] },
              duration: 200,
            },
          ],
        },
        "slide-up": {
          duration: 300,
          easing: e,
          enter: [
            { props: { translateY: "100%", translateZ: 0 }, duration: 1 },
            { props: { translateY: "0%", translateZ: 0 }, delay: 1 },
          ],
          leave: { props: { translateY: "100%" } },
        },
        "emoji-search-slide-away": {
          duration: 300,
          enter: {
            easing: "easeOutCubic",
            props: { translateY: ["0%", "-100%"] },
          },
          leave: {
            easing: "easeInCubic",
            props: { translateY: ["-100%", "0%"] },
          },
        },
        "emoji-search-slide-away-fast": {
          duration: 80,
          enter: {
            easing: "easeOutCubic",
            props: { translateY: ["0%", "-100%"] },
          },
          leave: {
            easing: "easeInCubic",
            props: { translateY: ["-100%", "0%"] },
          },
        },
        none: {},
        btn: {
          duration: 300,
          easing: e,
          enter: { props: { scale: [1, 0], opacity: [1, 0] } },
          leave: { props: { scale: [0, 1], opacity: [0, 1] } },
        },
        pop_delay: {
          duration: 300,
          enter: [
            {
              props: { scale: [1, 0], opacity: [1, 0] },
              delay: 500,
              easing: e,
            },
          ],
          leave: { props: "transition.expandOut", easing: s },
        },
        "delay-leave": {
          duration: 1,
          enter: { props: { opacity: [1, 1] } },
          leave: { props: { opacity: [1, 1] }, delay: 300 },
        },
        "media-caption": {
          enter: [
            {
              props: { opacity: [0, 0], translateY: ["100%", "100%"] },
              duration: 200,
            },
            {
              props: { opacity: [1, 0], translateY: ["0%", "100%"] },
              easing: e,
              delay: 200,
              duration: 300,
            },
          ],
          leave: { props: { opacity: [0, 1] }, easing: "ease", duration: 300 },
        },
        "thumb-scale": {
          duration: 400,
          easing: e,
          enter: { props: "transition.expandIn" },
          leave: { props: "transition.expandOut" },
        },
        "thumb-scale-flex": {
          duration: 400,
          easing: e,
          enter: { props: { scale: [1, 0], display: "flex" } },
          leave: { duration: 200, props: { scale: [0, 1], display: "flex" } },
        },
        default: {
          duration: 300,
          enter: { props: { opacity: [1, 0] } },
          leave: { props: { opacity: [0, 1] } },
        },
        noop: { duration: 0 },
        pip: {
          enter: { props: { opacity: [1, 0] }, duration: 400 },
          leave: {
            props: { scaleX: [0.5, 1], scaleY: [0.5, 1], opacity: [0, 1] },
            duration: 200,
            easing: u,
          },
        },
        voip: {
          enter: { props: { opacity: [1, 0] }, duration: 400 },
          leave: {
            props: { scaleX: [0.5, 1], scaleY: [0.5, 1], opacity: [0, 1] },
            duration: 200,
            easing: u,
          },
        },
        "replace-fade": {
          enter: [
            { props: { opacity: [0, 0] }, duration: 400 },
            { props: { opacity: [1, 0] }, duration: 400, delay: 400 },
          ],
          leave: { props: { opacity: [0, 1] }, duration: 400 },
        },
        scaleAndFade: {
          duration: 300,
          easing: e,
          enter: [
            { props: { scale: [1, 0] } },
            { props: { opacity: [1, 0] }, duration: 100 },
          ],
          leave: { props: { scaleX: [0, 1], scaleY: [0, 1], opacity: [0, 1] } },
        },
        "similar-channels": {
          easing: "ease-out",
          duration: 500,
          enter: { props: { opacity: [1, 0] } },
        },
        "fade-ease-out": {
          easing: "ease-out",
          duration: 300,
          enter: { props: { opacity: [1, 0] } },
          leave: { props: { opacity: [0, 1] } },
        },
        "pop-drawer-fast": {
          duration: 50,
          easing: [0.14, 0.62, 0.33, 0.9],
          enter: [
            {
              selector: "[data-js-navbar]",
              props: { translateX: ["0%", "100%"] },
            },
            { props: { opacity: [1, 0.5] } },
          ],
          leave: [
            {
              selector: "[data-js-navbar]",
              props: { translateX: ["100%", "0%"] },
            },
            { props: { opacity: [0, 1] } },
          ],
        },
        "bot-plugin-carousel": {
          duration: 350,
          enter: { props: { opacity: [1, 0] } },
          leave: { props: { opacity: [0, 1] } },
        },
        "support-citations-carousel": {
          duration: 350,
          enter: { props: { opacity: [1, 0] } },
          leave: { props: { opacity: [0, 1] } },
        },
        "pin-message": {
          duration: 600,
          easing: e,
          enter: { props: { translateY: ["0%", "200%"], opacity: [1, 0] } },
          leave: { props: { translateY: ["-200%", "0%"], opacity: [0, 1] } },
        },
        "compose-panel-down": {
          duration: 300,
          enter: {
            props: {
              maxHeight: ["200px", "0px"],
              translateY: ["0px", "24px"],
              overflowY: ["hidden", "hidden"],
            },
          },
          leave: {
            props: {
              maxHeight: ["0px", "200px"],
              translateY: ["24px", "0px"],
              overflowY: ["hidden", "hidden"],
            },
          },
        },
        "typing-indicator": {
          duration: 400,
          enter: {
            props: { opacity: [1, 0], translateY: ["0%", "100%"] },
            easing: e,
          },
          leave: {
            props: { opacity: [0, 1], translateY: ["100%", "0%"] },
            easing: s,
          },
        },
        "ai-search-suggestions": {
          duration: 400,
          easing: e,
          enter: { props: "slideDown" },
          leave: { props: "slideUp" },
        },
        "group-history-info": {
          duration: 400,
          easing: e,
          enter: { props: "slideDown" },
        },
      },
      m = Object.freeze(d);
    ((l.registerEffects = c), (l.Transitions = m));
  },
  98,
);
