// test.js - Super simple test
const fs = require('fs');

console.log("🧪 Running tests...");

// Test 1: Check if HTML file exists
try {
    const html = fs.readFileSync('index.html', 'utf8');
    if (html.includes('My CI/CD App')) {
        console.log("✅ Test 1 PASSED: HTML file contains correct title");
    } else {
        console.log("❌ Test 1 FAILED: HTML file missing title");
        process.exit(1);
    }
} catch (error) {
    console.log("❌ Test 1 FAILED: HTML file not found");
    process.exit(1);
}

// Test 2: Check if HTML is valid (basic check)
try {
    const html = fs.readFileSync('index.html', 'utf8');
    if (html.includes('<!DOCTYPE html>') && html.includes('</html>')) {
        console.log("✅ Test 2 PASSED: HTML structure is valid");
    } else {
        console.log("❌ Test 2 FAILED: HTML structure invalid");
        process.exit(1);
    }
} catch (error) {
    console.log("❌ Test 2 FAILED: Cannot read HTML file");
    process.exit(1);
}

console.log("🎉 All tests passed! App is ready to deploy.");