__d(
  "MarkedURInlineEntityPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^\{\{([^\s\}]+)\}\}([\s\S]*?)\{\{\/\1\}\}/,
      l =
        /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|.?\$|\{\{|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-]+@))/;
    function s(t) {
      var n = t.match(e);
      if (n)
        return {
          key: n[1],
          raw: n[0],
          text: n[2].trim(),
          type: "ur-inline-entity",
        };
    }
    ((i.textWithURInlineEntityAndKatexRule = l), (i.urInlineEntity = s));
  },
  66,
);
