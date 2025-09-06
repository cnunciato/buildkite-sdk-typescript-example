import { Pipeline } from "@buildkite/buildkite-sdk";
const pipeline = new Pipeline();
pipeline.addStep({
    command: "echo 'Hello, world!'",
});
console.log(pipeline.toYAML());
//# sourceMappingURL=index.js.map