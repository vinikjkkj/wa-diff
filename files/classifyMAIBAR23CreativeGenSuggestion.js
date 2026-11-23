__d(
  "classifyMAIBAR23CreativeGenSuggestion",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map([
        ["edit the attached image", "image"],
        ["generate image variations from an image i upload", "image"],
        ["generate image variations for this ad", "image"],
        ["generate variations of this image", "image"],
        ["write more ad copy variations", "text"],
      ]),
      l = function (t) {
        return t.map(function (e) {
          return new RegExp(
            "\\b" +
              e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
              "(?:s|es|d|ed|ing)?\\b",
          );
        });
      },
      s = l([
        "generate",
        "create",
        "make",
        "produce",
        "write",
        "edit",
        "restyle",
        "redo",
        "regenerate",
      ]),
      u = l([
        "image",
        "photo",
        "picture",
        "visual",
        "creative asset",
        "thumbnail",
      ]),
      c = l(["text", "copy", "headline", "caption", "description", "wording"]);
    function d(e, t) {
      return t.some(function (t) {
        return t.test(e);
      });
    }
    function m(t) {
      var n = t
          .toLowerCase()
          .replace(/\s+/g, " ")
          .trim()
          .replace(/[.!?]+$/, ""),
        r = e.get(n);
      return r != null
        ? r
        : d(n, s)
          ? d(n, u)
            ? "image"
            : d(n, c)
              ? "text"
              : null
          : null;
    }
    function p(e) {
      var t = new Set();
      e.forEach(function (e) {
        var n = m(e);
        n != null && t.add(n);
      });
      var n = ["image", "text"];
      return n.filter(function (e) {
        return t.has(e);
      });
    }
    ((i.classifyMAIBAR23CreativeGenSuggestion = m),
      (i.classifyMAIBAR23CreativeGenSuggestions = p));
  },
  66,
);
