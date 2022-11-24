"use strict";
const api = require("./handlers/api");
const configured = require("./handlers/configured");
const staticVuePath = __dirname + "\\views\\dist";
const express = require("express");

module.exports = function(app, opts) {
  // Setup routes, middleware, and handlers

  app.get("/configured", configured(opts));
  app.get("/api", api);
  app.get("*", express.static(staticVuePath));
};
