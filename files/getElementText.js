__d(
  "getElementText",
  ["isElementNode", "isTextNode"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      if (r("isTextNode")(t)) return t.data;
      if (r("isElementNode")(t)) {
        if (e === null) {
          var n = document.createElement("div");
          e = n.textContent != null ? "textContent" : "innerText";
        }
        if (e === "textContent") return t.textContent || "";
        var o = t.innerText;
        return typeof o == "string" ? o : "";
      } else return "";
    }
    l.default = s;
  },
  98,
);
