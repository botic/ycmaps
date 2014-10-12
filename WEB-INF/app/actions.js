var response = require('ringo/jsgi/response');
var mustache = require('ringo/mustache');
var {isHexColor} = require("ringo/utils/strings");

exports["bundeslaender.svg"] = function (req) {
   var template = getResource("./templates/0.svg").content;

   var srflet = req.env.servletRequest;

   var colors = {
      gkz10000: isHexColor("#" + ((srflet.getParameter("gkz10000") || "ccc"))) ? ("#" + (srflet.getParameter("gkz10000") || "ccc")) : "#ccc",
      gkz20000: isHexColor("#" + ((srflet.getParameter("gkz20000") || "ccc"))) ? ("#" + (srflet.getParameter("gkz20000") || "ccc")) : "#ccc",
      gkz30000: isHexColor("#" + ((srflet.getParameter("gkz30000") || "ccc"))) ? ("#" + (srflet.getParameter("gkz30000") || "ccc")) : "#ccc",
      gkz40000: isHexColor("#" + ((srflet.getParameter("gkz40000") || "ccc"))) ? ("#" + (srflet.getParameter("gkz40000") || "ccc")) : "#ccc",
      gkz50000: isHexColor("#" + ((srflet.getParameter("gkz50000") || "ccc"))) ? ("#" + (srflet.getParameter("gkz50000") || "ccc")) : "#ccc",
      gkz60000: isHexColor("#" + ((srflet.getParameter("gkz60000") || "ccc"))) ? ("#" + (srflet.getParameter("gkz60000") || "ccc")) : "#ccc",
      gkz70000: isHexColor("#" + ((srflet.getParameter("gkz70000") || "ccc"))) ? ("#" + (srflet.getParameter("gkz70000") || "ccc")) : "#ccc",
      gkz80000: isHexColor("#" + ((srflet.getParameter("gkz80000") || "ccc"))) ? ("#" + (srflet.getParameter("gkz80000") || "ccc")) : "#ccc",
      gkz90000: isHexColor("#" + ((srflet.getParameter("gkz90000") || "ccc"))) ? ("#" + (srflet.getParameter("gkz90000") || "ccc")) : "#ccc"
   };

    return response.xml(
        mustache.to_html(template, colors)
    ).addHeaders({
      "content-type": "image/svg+xml"
    });
};
