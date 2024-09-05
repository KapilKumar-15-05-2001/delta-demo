"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var path = require('path');
const vscode = require("vscode");
const net = require("net");
class PlayServer {
    constructor(parameters) {
    }
    start() {
        var mainSocket;
        var server = net.createServer(function (socket) {
            socket.setEncoding('utf8');
            // 接收到数据
            socket.on('data', function (data) { });
            //数据错误事件
            socket.on('error', function (exception) {
            });
            //客户端关闭事件
            socket.on('close', function (data) {
            });
        }).listen(9090);
        //服务器监听事件
        server.on('listening', function () {
            vscode.window.showInformationMessage("调试消息端口:9090\n");
        });
        //服务器错误事件
        server.on("error", function (exception) {
            vscode.window.showInformationMessage("socket 调试服务器错误:" + exception + "\n");
        });
    }
}
exports.PlayServer = PlayServer;
//# sourceMappingURL=PlayServer.js.map