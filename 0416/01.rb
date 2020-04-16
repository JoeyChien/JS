a = 1

def foo
  puts a #無法吃到外面 a
end
# foo() #會噴錯誤因為 a 沒有被定義

puts [1,2,3,4,5].map {|i| i + a } #block 中可吃到外面的 a
puts [1,2,3,4,5].map {|a| a + a } #shadowing 內部宣告一個 a 遮蔽外面的 a

def mapping(x) 
    puts [1,2,3,4,5].map {|i| i + x } #block就像是一個沒有名字的fun，Ruby的fun是次等公民，沒有依附特定物件也會依附main物件
end

mapping(a) #將外面的 a 傳遞進去

def bar(x, y, z)
  x + y + z
end
bar(1, 2, 3)

curried_bar = self.method(:bar).curry
p curried_bar
p curried_bar.(1)
p curried_bar.(1).(2)
p curried_bar.(1).(2).(3)